import { useRef, useState, useEffect, useCallback } from 'react';
import {
    LuBold,
    LuItalic,
    LuUnderline,
    LuHeading2,
    LuHeading3,
    LuList,
    LuListOrdered,
    LuLink,
    LuUnlink,
    LuRemoveFormatting,
} from 'react-icons/lu';

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */

function textToHtml(text) {
    if (!text) return '<p><br></p>';
    const trimmed = text.trim();
    if (!trimmed) return '<p><br></p>';

    // Already HTML (from the editor) → use as-is.
    if (/^<(p|div|h[1-6]|ul|ol|li|blockquote)/i.test(trimmed) && !/\n\n/.test(trimmed)) {
        return trimmed;
    }

    // Convert blank-line-separated plain text to <p> tags.
    return trimmed
        .split(/\n\n+/)
        .map((p) => {
            const pt = p.trim();
            if (!pt) return '';
            if (/^<(p|div|h[1-6]|ul|ol|li|blockquote)/i.test(pt)) return pt;
            return `<p>${pt.replace(/\n/g, '<br>')}</p>`;
        })
        .filter(Boolean)
        .join('');
}

function normalizeHtml(html) {
    return (html || '')
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .replace(/<p><br><\/p>/g, '')
        .replace(/<div><br><\/div>/g, '')
        .trim();
}

/** Normalize a cloned DOM tree so saved HTML stays clean. */
function normalizeEditorClone(clone) {
    // Convert stray divs to paragraphs.
    clone.querySelectorAll('div').forEach((div) => {
        const p = document.createElement('p');
        p.innerHTML = div.innerHTML;
        div.parentNode.replaceChild(p, div);
    });

    // Keep empty paragraphs visible.
    clone.querySelectorAll('p').forEach((p) => {
        if (!p.textContent.trim() && p.innerHTML !== '<br>') p.innerHTML = '<br>';
    });

    // Ensure links are safe and open in a new tab.
    clone.querySelectorAll('a').forEach((a) => {
        if (!a.textContent.trim()) {
            a.remove();
            return;
        }
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
    });

    // Trim trailing empty paragraphs.
    const children = Array.from(clone.children);
    while (children.length > 0) {
        const last = children[children.length - 1];
        if (last.tagName === 'P' && last.innerHTML === '<br>') {
            last.remove();
            children.pop();
        } else {
            break;
        }
    }

    if (clone.children.length === 0) clone.innerHTML = '<p><br></p>';
}

/* ------------------------------------------------------------------ *
 * Toolbar button
 * ------------------------------------------------------------------ */

function ToolButton({ onAction, title, active, children }) {
    return (
        <button
            type="button"
            title={title}
            aria-label={title}
            // mousedown (not click) so the editor keeps its text selection.
            onMouseDown={(e) => {
                e.preventDefault();
                onAction();
            }}
            className={`flex h-8 w-8 items-center justify-center rounded-md text-sm transition-colors ${
                active ? 'bg-brand-orange text-white' : 'text-gray-600 hover:bg-gray-200'
            }`}
        >
            {children}
        </button>
    );
}

/* ------------------------------------------------------------------ *
 * Component — a real WYSIWYG editor with a formatting toolbar
 * ------------------------------------------------------------------ */

export default function RichTextarea({ value = '', onChange, rows = 4, className = '', placeholder = '', ...props }) {
    const editorRef = useRef(null);
    const savedRange = useRef(null);
    const lastEmitted = useRef(null);
    const [hasContent, setHasContent] = useState(false);
    const [linkMode, setLinkMode] = useState(false);
    const [url, setUrl] = useState('');

    /* Sync external value → editor without disturbing the cursor. */
    useEffect(() => {
        const editor = editorRef.current;
        if (!editor) return;
        if (lastEmitted.current !== null && normalizeHtml(value) === normalizeHtml(lastEmitted.current)) return;

        const html = textToHtml(value);
        if (normalizeHtml(editor.innerHTML) !== normalizeHtml(html)) {
            editor.innerHTML = html;
        }
        setHasContent(editor.textContent.trim().length > 0);
    }, [value]);

    const emitChange = useCallback(() => {
        const editor = editorRef.current;
        if (!editor) return;
        const clone = editor.cloneNode(true);
        normalizeEditorClone(clone);

        const text = editor.textContent.trim();
        setHasContent(text.length > 0);

        const html = text.length === 0 ? '' : clone.innerHTML;
        lastEmitted.current = html;
        onChange({ target: { value: html } });
    }, [onChange]);

    /* Run a formatting command, keeping focus in the editor. */
    const exec = useCallback(
        (command, val = null) => {
            const editor = editorRef.current;
            if (!editor) return;
            editor.focus();
            document.execCommand(command, false, val);
            emitChange();
        },
        [emitChange]
    );

    const formatBlock = useCallback(
        (tag) => {
            // Browsers vary on whether the tag needs angle brackets.
            const editor = editorRef.current;
            if (!editor) return;
            editor.focus();
            try {
                document.execCommand('formatBlock', false, tag);
            } catch {
                document.execCommand('formatBlock', false, `<${tag}>`);
            }
            emitChange();
        },
        [emitChange]
    );

    const startLink = useCallback(() => {
        const selection = window.getSelection();
        if (!selection || selection.isCollapsed || !selection.toString().trim()) {
            // Nothing selected — tell the user what to do.
            return;
        }
        savedRange.current = selection.getRangeAt(0).cloneRange();
        setUrl('');
        setLinkMode(true);
    }, []);

    const applyLink = useCallback(() => {
        const editor = editorRef.current;
        if (!editor || !url.trim() || !savedRange.current) {
            setLinkMode(false);
            return;
        }
        editor.focus();
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(savedRange.current);
        document.execCommand('createLink', false, url.trim());
        emitChange();
        setLinkMode(false);
        setUrl('');
        savedRange.current = null;
    }, [url, emitChange]);

    /* Strip formatting on paste. */
    const handlePaste = useCallback(
        (e) => {
            e.preventDefault();
            const text = e.clipboardData.getData('text/plain');
            document.execCommand('insertText', false, text);
            emitChange();
        },
        [emitChange]
    );

    const minHeight = rows * 24;

    return (
        <div className={`overflow-hidden rounded-xl border border-gray-200 bg-white focus-within:border-brand-orange focus-within:ring-2 focus-within:ring-brand-orange/20 ${className}`}>
            {/* Toolbar */}
            <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-200 bg-gray-50 px-2 py-1.5">
                <ToolButton title="Bold" onAction={() => exec('bold')}><LuBold className="h-4 w-4" /></ToolButton>
                <ToolButton title="Italic" onAction={() => exec('italic')}><LuItalic className="h-4 w-4" /></ToolButton>
                <ToolButton title="Underline" onAction={() => exec('underline')}><LuUnderline className="h-4 w-4" /></ToolButton>
                <span className="mx-1 h-5 w-px bg-gray-200" />
                <ToolButton title="Heading" onAction={() => formatBlock('h2')}><LuHeading2 className="h-4 w-4" /></ToolButton>
                <ToolButton title="Subheading" onAction={() => formatBlock('h3')}><LuHeading3 className="h-4 w-4" /></ToolButton>
                <ToolButton title="Paragraph" onAction={() => formatBlock('p')}><span className="text-xs font-bold">¶</span></ToolButton>
                <span className="mx-1 h-5 w-px bg-gray-200" />
                <ToolButton title="Bullet list" onAction={() => exec('insertUnorderedList')}><LuList className="h-4 w-4" /></ToolButton>
                <ToolButton title="Numbered list" onAction={() => exec('insertOrderedList')}><LuListOrdered className="h-4 w-4" /></ToolButton>
                <span className="mx-1 h-5 w-px bg-gray-200" />
                <ToolButton title="Add link (select text first)" onAction={startLink}><LuLink className="h-4 w-4" /></ToolButton>
                <ToolButton title="Remove link" onAction={() => exec('unlink')}><LuUnlink className="h-4 w-4" /></ToolButton>
                <ToolButton title="Clear formatting" onAction={() => exec('removeFormat')}><LuRemoveFormatting className="h-4 w-4" /></ToolButton>
            </div>

            {/* Link input row */}
            {linkMode && (
                <div className="flex items-center gap-2 border-b border-gray-200 bg-amber-50 px-2 py-2">
                    <LuLink className="h-4 w-4 flex-shrink-0 text-gray-400" />
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="https://… or /heating"
                        autoFocus
                        className="min-w-0 flex-1 rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs text-[#07264A] outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') { e.preventDefault(); applyLink(); }
                            if (e.key === 'Escape') { setLinkMode(false); savedRange.current = null; }
                        }}
                    />
                    <button type="button" onClick={applyLink} className="rounded-lg bg-brand-orange px-3 py-1.5 text-xs font-bold text-white hover:bg-brand-orange-dark">Add</button>
                    <button type="button" onClick={() => { setLinkMode(false); savedRange.current = null; }} className="rounded-lg px-2 py-1.5 text-xs font-semibold text-gray-500 hover:text-gray-800">Cancel</button>
                </div>
            )}

            {/* Editable area */}
            <div className="relative">
                <div
                    ref={editorRef}
                    contentEditable
                    suppressContentEditableWarning
                    onInput={emitChange}
                    onPaste={handlePaste}
                    className="prose-editor max-w-none overflow-y-auto px-3.5 py-2.5 text-sm leading-relaxed text-[#07264A] outline-none [&_a]:font-semibold [&_a]:text-blue-600 [&_a]:underline [&_h2]:mt-3 [&_h2]:text-lg [&_h2]:font-bold [&_h3]:mt-2 [&_h3]:text-base [&_h3]:font-bold [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:my-1.5 [&_ul]:list-disc [&_ul]:pl-5"
                    style={{ minHeight }}
                    {...props}
                />
                {!hasContent && placeholder && (
                    <div className="pointer-events-none absolute inset-0 px-3.5 py-2.5 text-sm text-gray-400">{placeholder}</div>
                )}
            </div>
        </div>
    );
}
