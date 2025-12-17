import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const stmt = db.prepare(`
      INSERT INTO enterprise_projects (
        company_name, industry, company_size, contact_person, email,
        project_title, problem_description, ai_requirements,
        estimated_timeline, data_availability, security_requirements, budget_range
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)

    stmt.run(
      data.companyName,
      data.industry,
      data.companySize,
      data.contactPerson,
      data.email,
      data.projectTitle,
      data.problemDescription,
      JSON.stringify(data.aiRequirements),
      data.estimatedTimeline,
      data.dataAvailability,
      data.securityRequirements,
      data.budgetRange || null
    )

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error saving project:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to save project' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Fetch from both tables and merge results
    const enterpriseProjects = db.prepare('SELECT * FROM enterprise_projects ORDER BY created_at DESC').all()
    const projectSubmissions = db.prepare('SELECT * FROM project_submissions ORDER BY createdAt DESC').all()

    // Transform project_submissions to match enterprise_projects format
    const transformedSubmissions = projectSubmissions.map((submission: any) => ({
      id: submission.id,
      company_name: submission.companyName,
      industry: submission.industry,
      company_size: submission.companySize,
      contact_person: submission.contactPerson,
      email: submission.email,
      project_title: submission.projectTitle,
      problem_description: submission.problemDescription,
      ai_requirements: submission.aiRequirements,
      estimated_timeline: submission.estimatedTimeline,
      data_availability: submission.dataAvailability,
      security_requirements: submission.securityRequirements,
      budget_range: submission.budgetRange,
      created_at: submission.createdAt,
    }))

    // Merge and sort by created date (newest first)
    const allProjects = [...enterpriseProjects, ...transformedSubmissions].sort((a: any, b: any) => {
      const dateA = new Date(a.created_at).getTime()
      const dateB = new Date(b.created_at).getTime()
      return dateB - dateA
    })

    return NextResponse.json({ success: true, data: allProjects }, { status: 200 })
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}

