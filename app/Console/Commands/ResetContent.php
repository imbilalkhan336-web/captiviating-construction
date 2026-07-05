<?php

namespace App\Console\Commands;

use App\Models\ContentBlock;
use Database\Seeders\ContentBlockSeeder;
use Illuminate\Console\Command;

class ResetContent extends Command
{
    /**
     * Usage:
     *   php artisan content:reset heating      (one page)
     *   php artisan content:reset              (all pages — asks to confirm)
     *
     * DESTRUCTIVE: deletes the page's existing content blocks and replaces
     * them with the defaults defined in ContentBlockSeeder. Use this to push
     * updated default copy (e.g. new internal links) to a site whose blocks
     * were seeded before the copy changed.
     */
    protected $signature = 'content:reset {page? : The page slug to reset (e.g. heating). Omit to reset all pages.}
                            {--force : Skip the confirmation prompt}';

    protected $description = 'Reset a page\'s content blocks back to the seeder defaults (overwrites existing blocks).';

    public function handle(): int
    {
        $data = (new ContentBlockSeeder())->data();
        $page = $this->argument('page');

        if ($page !== null && ! isset($data[$page])) {
            $this->error("Unknown page \"{$page}\". Available: " . implode(', ', array_keys($data)));
            return self::FAILURE;
        }

        $pages = $page !== null ? [$page] : array_keys($data);

        if (! $this->option('force')) {
            $label = $page !== null ? "the \"{$page}\" page" : 'ALL pages (' . implode(', ', $pages) . ')';
            if (! $this->confirm("This will DELETE existing content blocks for {$label} and restore defaults. Continue?")) {
                $this->info('Aborted. No changes made.');
                return self::SUCCESS;
            }
        }

        foreach ($pages as $slug) {
            $deleted = ContentBlock::where('page', $slug)->count();
            ContentBlock::where('page', $slug)->delete();

            foreach ($data[$slug] as $i => $block) {
                ContentBlock::create(array_merge($block, ['page' => $slug, 'position' => $i]));
            }

            $this->line("  {$slug}: removed {$deleted}, inserted " . count($data[$slug]) . ' blocks.');
        }

        $this->info('Done.');
        return self::SUCCESS;
    }
}
