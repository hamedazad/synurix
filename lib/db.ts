import Database from 'better-sqlite3'
import path from 'path'
import fs from 'fs'

let db: Database.Database | null = null

function getDatabase(): Database.Database {
  if (db) {
    return db
  }

  try {
    // Ensure data directory exists
    const dataDir = path.join(process.cwd(), 'data')
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    const dbPath = path.join(dataDir, 'synurix-forms.sqlite')
    db = new Database(dbPath)

    // Initialize all tables
    db.exec(`
      CREATE TABLE IF NOT EXISTS career_submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fullName TEXT NOT NULL,
        email TEXT NOT NULL,
        role TEXT NOT NULL,
        skills TEXT NOT NULL,
        motivation TEXT NOT NULL,
        resumeLink TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS project_submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        companyName TEXT NOT NULL,
        industry TEXT NOT NULL,
        companySize TEXT NOT NULL,
        contactPerson TEXT NOT NULL,
        email TEXT NOT NULL,
        projectTitle TEXT NOT NULL,
        problemDescription TEXT NOT NULL,
        aiRequirements TEXT NOT NULL,
        estimatedTimeline TEXT NOT NULL,
        dataAvailability TEXT NOT NULL,
        securityRequirements TEXT NOT NULL,
        budgetRange TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS career_applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        location TEXT NOT NULL,
        profile_url TEXT,
        role_of_interest TEXT NOT NULL,
        years_of_experience INTEGER NOT NULL,
        key_skills TEXT NOT NULL,
        motivation TEXT NOT NULL,
        availability TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS enterprise_projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        company_name TEXT NOT NULL,
        industry TEXT NOT NULL,
        company_size TEXT NOT NULL,
        contact_person TEXT NOT NULL,
        email TEXT NOT NULL,
        project_title TEXT NOT NULL,
        problem_description TEXT NOT NULL,
        ai_requirements TEXT NOT NULL,
        estimated_timeline TEXT NOT NULL,
        data_availability TEXT NOT NULL,
        security_requirements TEXT NOT NULL,
        budget_range TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS cooperation_applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        role TEXT NOT NULL,
        skills TEXT NOT NULL,
        motivation TEXT NOT NULL,
        resume_link TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `)

    return db
  } catch (error) {
    console.error('Database initialization error:', error)
    throw error
  }
}

const dbInstance = getDatabase()
export { dbInstance as db }
export default dbInstance
