"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function (pgm) {
  await pgm.runSql(`
        DO $$ BEGIN
    CREATE TYPE licence_group_status AS ENUM ('active', 'inactive');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;
    `);

  await pgm.runSql(`
        DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('standard', 'admin', 'contributor');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;
    `);

  await pgm.runSql(`
        CREATE TABLE IF NOT EXISTS licence_group (
            licence_id uuid PRIMARY KEY,
            company_name varchar(100),
            logo_url varchar(255),
            status licence_group_status DEFAULT 'active'
        )
    `);

  await pgm.runSql(`
    CREATE TABLE IF NOT EXISTS users (
        user_id uuid PRIMARY KEY,
        name varchar(255),
        user_role user_role,
        licence_id uuid REFERENCES licence_group(licence_id) NULL
    )
  `);

  await pgm.runSql(`
    CREATE TABLE IF NOT EXISTS categories (
        category_id SERIAL PRIMARY KEY UNIQUE,
        title varchar(50),
        licence_id uuid REFERENCES licence_group(licence_id) NULL
    )
  `);

  await pgm.runSql(`
    CREATE TABLE IF NOT EXISTS subjects (
        subject_id SERIAL PRIMARY KEY UNIQUE,
        title varchar(50),
        description varchar(200),
        category_id INT REFERENCES categories(category_id),
        licence_id uuid REFERENCES licence_group(licence_id)
    )
  `);

  await pgm.runSql(`
    CREATE TABLE IF NOT EXISTS questions (
        question_id SERIAL PRIMARY KEY,
        title varchar(50),
        description varchar(100),
        timeToAnswer INT NULL 
    )
  `);

  await pgm.runSql(`
    CREATE TABLE IF NOT EXISTS choices (
        choice_id SERIAL PRIMARY KEY UNIQUE,
        title varchar(50),
        correct bool,
        question_id INT REFERENCES questions(question_id)
    )
  `);

  await pgm.runSql(`
        CREATE TABLE IF NOT EXISTS answers (
            question_id INT REFERENCES questions(question_id),
            user_id uuid REFERENCES users(user_id),
            choice_id INT REFERENCES choices(choice_id)
        )
    `);

  await pgm.runSql(`
        CREATE TABLE IF NOT EXISTS questions_licence (
            question_id INT REFERENCES questions(question_id),
            licence_id uuid REFERENCES licence_group(licence_id)
        )
    `);

  await pgm.runSql(`
        CREATE TABLE IF NOT EXISTS questions_group (
            group_id SERIAL PRIMARY KEY,
            question_id INT REFERENCES questions(question_id),
            subject_id INT REFERENCES subjects(subject_id)
        )
    `);
};

exports.down = async function () {
  console.warn("HAH");
};
