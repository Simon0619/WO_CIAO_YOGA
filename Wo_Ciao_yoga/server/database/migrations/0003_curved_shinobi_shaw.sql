PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`cover` text NOT NULL,
	`cover2` text,
	`start_at` integer NOT NULL,
	`end_at` integer NOT NULL,
	`teacher_id` integer,
	FOREIGN KEY (`teacher_id`) REFERENCES `teachers`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
INSERT INTO `__new_events`("id", "name", "description", "cover", "cover2", "start_at", "end_at", "teacher_id") SELECT "id", "name", "description", "cover", "cover2", "start_at", "end_at", "teacher_id" FROM `events`;--> statement-breakpoint
DROP TABLE `events`;--> statement-breakpoint
ALTER TABLE `__new_events` RENAME TO `events`;--> statement-breakpoint
PRAGMA foreign_keys=ON;