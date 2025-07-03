CREATE TABLE `events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`cover` text NOT NULL,
	`start_at` integer NOT NULL,
	`end_at` integer NOT NULL,
	`teacher_id` integer,
	FOREIGN KEY (`teacher_id`) REFERENCES `teachers`(`id`) ON UPDATE no action ON DELETE no action
);
