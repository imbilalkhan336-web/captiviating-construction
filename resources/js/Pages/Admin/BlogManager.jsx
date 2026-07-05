import { Head, Link, router, usePage } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import {
    LuPlus,
    LuPencil,
    LuTrash2,
    LuCheck,
    LuExternalLink,
    LuEye,
    LuEyeOff,
} from 'react-icons/lu';

function formatDate(value) {
    if (!value) return '';
    return new Date(value).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function BlogManager({ posts = [] }) {
    const flash = usePage().props.flash;

    const remove = (post) => {
        if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
        router.delete(route('posts.destroy', post.id), { preserveScroll: true });
    };

    return (
        <AdminLayout header={<h1 className="text-lg font-bold text-[#07264A]">Blog Posts</h1>}>
            <Head title="Admin — Blog" />

            {flash?.status && (
                <div className="mb-6 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700">
                    <LuCheck className="h-4 w-4" />
                    {flash.status}
                </div>
            )}

            {/* Toolbar */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div>
                    <p className="text-sm font-bold text-[#07264A]">Manage blog posts</p>
                    <p className="text-xs text-gray-400">Add, edit, or remove articles. {posts.length} total.</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <Link
                        href={route('admin.blog.create')}
                        className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-widest text-white shadow-sm transition-colors hover:bg-brand-orange-dark"
                    >
                        <LuPlus className="h-4 w-4" />
                        New Post
                    </Link>
                    <a
                        href="/blog"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-widest text-gray-600 transition-colors hover:bg-gray-100"
                    >
                        <LuExternalLink className="h-3.5 w-3.5" />
                        View Blog
                    </a>
                </div>
            </div>

            {posts.length === 0 ? (
                <div className="rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center">
                    <p className="text-sm font-semibold text-gray-400">No posts yet. Click "New Post" to write your first one.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:flex-row sm:items-center"
                        >
                            <div className="flex min-w-0 flex-1 items-center gap-4">
                                <div className="h-16 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                                    <img
                                        src={post.image_path || '/img/cover.webp'}
                                        alt={post.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                        <p className="truncate font-display text-lg uppercase text-[#07264A]">{post.title}</p>
                                        <span
                                            className={`inline-flex flex-shrink-0 items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-widest ${
                                                post.is_published
                                                    ? 'bg-emerald-100 text-emerald-700'
                                                    : 'bg-gray-100 text-gray-500'
                                            }`}
                                        >
                                            {post.is_published ? <LuEye className="h-3 w-3" /> : <LuEyeOff className="h-3 w-3" />}
                                            {post.is_published ? 'Published' : 'Draft'}
                                        </span>
                                    </div>
                                    <p className="mt-0.5 truncate text-xs text-gray-400">
                                        {formatDate(post.created_at)} · /blog/{post.slug}
                                    </p>
                                    {post.tags?.length > 0 && (
                                        <div className="mt-2 flex flex-wrap gap-1.5">
                                            {post.tags.map((tag) => (
                                                <span
                                                    key={tag.id}
                                                    className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600"
                                                >
                                                    {tag.image_path && (
                                                        <img src={tag.image_path} alt="" className="h-3 w-3 rounded-full object-cover" />
                                                    )}
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-shrink-0 items-center gap-2 self-end sm:self-auto">
                                <Link
                                    href={route('admin.blog.edit', post.id)}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:border-brand-orange hover:text-brand-orange"
                                    title="Edit"
                                >
                                    <LuPencil className="h-4 w-4" />
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => remove(post)}
                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:border-red-400 hover:text-red-500"
                                    title="Delete"
                                >
                                    <LuTrash2 className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </AdminLayout>
    );
}
