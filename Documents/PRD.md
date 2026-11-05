# Product Requirements Document (PRD)

# EduSphere – Learning Management System

| Field | Value |
| ----- | ----- |
| Product | EduSphere – Learning Management System (LMS) |
| Document type | Product Requirements Document |
| Status | Draft for product-owner review |
| Audience | Development team and AI coding agent |

> **Purpose:** This document defines the product requirements, features, user journeys, technical constraints, permissions, and acceptance criteria for EduSphere. It is the single source of truth for the development team and the AI coding agent throughout the project.

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Problem Statement](#2-problem-statement)
3. [Value Proposition](#3-value-proposition)
4. [Target Users](#4-target-users)
5. [Product Scope](#5-product-scope)
6. [Core User Journeys](#6-core-user-journeys)
7. [User Stories](#7-user-stories)
8. [Functional Requirements](#8-functional-requirements)
9. [Non-Functional Requirements](#9-non-functional-requirements)
10. [Pages and Screens](#10-pages-and-screens)
11. [Roles and Permissions](#11-roles-and-permissions)
12. [Data Requirements](#12-data-requirements)
13. [API Requirements](#13-api-requirements)
14. [Integrations](#14-integrations)
15. [Loading, Empty and Error States](#15-loading-empty-and-error-states)
16. [MVP Scope](#16-mvp-scope)
17. [Out-of-Scope Items](#17-out-of-scope-items)
18. [Success Criteria and Acceptance Metrics](#18-success-criteria-and-acceptance-metrics)
19. [Development Phases](#19-development-phases)
20. [Technical Constraints and Coding Standards](#20-technical-constraints-and-coding-standards)
21. [Assumptions](#21-assumptions)
22. [Decisions Requiring Product Owner Approval](#22-decisions-requiring-product-owner-approval)
23. [Final Product Definition](#23-final-product-definition)
24. [Instructions for the AI Coding Agent](#24-instructions-for-the-ai-coding-agent)

---

## 1. Product Overview

### 1.1 Product Name

EduSphere – Learning Management System (LMS)

### 1.2 Product Description

EduSphere is a full-stack, web-based Learning Management System that connects administrators, instructors, and students through a centralized online learning platform.

- **Instructors** create and manage courses, organize lessons, publish assignments, conduct quizzes, evaluate student performance, and monitor learning progress.
- **Students** explore and enroll in courses, access learning materials, submit assignments, attempt quizzes, view results, and track their progress.
- **Administrators** manage users, instructors, courses, approvals, categories, and overall platform activity.

**Technology summary**

- Frontend: HTML5, CSS3, Vanilla JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB
- ODM: Mongoose
- Architecture: Client-server with RESTful APIs
- Authentication: Secure session or token-based authentication
- Authorization: Role-Based Access Control (RBAC)

### 1.3 Product Vision

To build a modern, reliable, user-friendly and scalable online learning platform that simplifies course management, teaching, assessment, and student learning through a unified digital environment.

### 1.4 Product Goals

1. Provide a centralized platform for online education.
2. Enable instructors to create and manage educational courses.
3. Provide students with an organized digital learning experience.
4. Simplify assignment submission and evaluation.
5. Support online quizzes and examinations.
6. Track student progress and academic performance.
7. Enable administrators to manage platform operations.
8. Provide a responsive and consistent user interface.

---

## 2. Problem Statement

Traditional learning environments often rely on multiple disconnected tools for course materials, assignments, examinations, grading, communication, and progress tracking. This causes several problems:

- Students struggle to access learning materials from one place.
- Instructors spend extra time managing courses and evaluating submissions.
- Assignment management and grading become disorganized.
- Students lack a clear overview of their learning progress.
- Administrators find it difficult to manage users, instructors and courses.
- Communication between students and instructors becomes fragmented.

EduSphere addresses these challenges by bringing essential educational activities together in one integrated platform.

---

## 3. Value Proposition

EduSphere provides a unified learning environment where administrators manage the platform, instructors deliver content, and students participate in structured online learning.

| User       | Value proposition                                                        |
| ---------- | ------------------------------------------------------------------------ |
| Admin      | Centralized platform management, user control and reporting              |
| Instructor | Simplified course creation, student management and assessment            |
| Student    | Organized courses, learning resources, assignments and progress tracking |

### 3.1 Competitive Differentiation

- A unified three-role platform.
- Simple and organized dashboards.
- Integrated course and curriculum management.
- Assignment submission and grading.
- Online quiz and assessment functionality.
- Student progress tracking.
- Certificate generation and verification.
- Consistent user experience across all roles.

---

## 4. Target Users

### 4.1 Administrator

Manages the entire platform.

**Needs:** manage students and instructors; approve instructor registrations; review and approve courses; manage course categories; monitor platform activity; access reports and statistics.

### 4.2 Instructor

Creates and manages educational content.

**Needs:** create and manage courses; organize lessons and sections; upload resources; manage enrolled students; create assignments and quizzes; evaluate submissions; monitor student performance.

### 4.3 Student

Uses the platform to learn and complete academic activities.

**Needs:** register and log in; explore and enroll in courses; access materials; complete lessons; submit assignments; attempt quizzes; view grades and feedback; track learning progress.

---

## 5. Product Scope

EduSphere consists of four primary application areas, all operating through a single backend and a centralized MongoDB database.

### 5.1 Application Structure

| Application area     | Purpose                                   |
| -------------------- | ----------------------------------------- |
| Public website       | Platform information and course discovery |
| Admin dashboard      | Platform administration                   |
| Instructor dashboard | Teaching and course management            |
| Student dashboard    | Learning and assessment                   |

### 5.2 Core Architecture Principles

- One integrated application.
- One shared authentication system.
- Three primary user roles.
- One centralized database.
- RESTful API communication.
- Reusable frontend components.
- Backend-enforced authorization.
- Responsive design.
- Modular backend organization.

> **Important:** Separate dashboards must not become separate authentication systems or independent applications.

---

## 6. Core User Journeys

### 6.1 Student Registration and Login

**Journey**

1. Student opens the EduSphere website.
2. Student selects Register.
3. Student enters name, email and password.
4. Frontend validates required fields.
5. Backend validates the registration request.
6. Password is securely hashed.
7. Student account is created.
8. Student verifies their email, if verification is enabled.
9. Student logs in.
10. Backend authenticates the user.
11. Student is redirected to the student dashboard.

**Acceptance criteria**

- Registration must reject duplicate email addresses.
- Passwords must never be stored in plain text.
- Invalid credentials must produce an appropriate error.
- Successful login must redirect according to the database role.
- Inactive accounts must not access protected resources.

### 6.2 Instructor Registration and Approval

**Journey**

1. Instructor opens the instructor registration page.
2. Instructor submits registration details.
3. Backend creates an instructor account with pending approval.
4. Admin receives an approval notification.
5. Admin reviews the application.
6. Admin approves or rejects the application.
7. Approved instructor can access the instructor dashboard.

**Acceptance criteria**

- Public users cannot register themselves as administrators.
- New instructor applications remain pending until approved.
- Pending or rejected instructors cannot create or publish courses.
- Only administrators can approve instructor applications.

### 6.3 Admin Manages Platform

**Journey**

1. Admin logs in.
2. Admin opens the dashboard.
3. Admin views platform statistics.
4. Admin manages students and instructors.
5. Admin reviews instructor applications.
6. Admin manages course categories.
7. Admin reviews courses awaiting approval.
8. Admin accesses reports and activity records.

**Acceptance criteria**

- Only authorized administrators can perform administrative operations.
- Admin can search, filter and paginate user and course records.
- Changes are reflected in the database.
- Important administrative actions are recorded.

### 6.4 Instructor Creates a Course

**Journey**

1. Instructor logs in.
2. Opens My Courses.
3. Selects Create Course.
4. Enters course information.
5. Selects a category and difficulty level.
6. Uploads a course thumbnail.
7. Saves the course as a draft.
8. Adds sections and lessons.
9. Submits the course for approval.
10. Admin reviews and approves the course.
11. Approved course becomes publicly available.

**Acceptance criteria**

- Required course fields are validated.
- Instructors can only modify their own courses.
- Draft courses do not appear in the public course catalogue.
- Only approved and published courses can be enrolled in.
- Course deletion follows the platform's data-retention rules.

### 6.5 Student Enrolls in a Course

**Journey**

1. Student logs in.
2. Opens Explore Courses.
3. Browses or searches courses.
4. Opens course details.
5. Reviews description and instructor information.
6. Selects Enroll.
7. Backend checks enrollment eligibility.
8. Enrollment record is created.
9. Course appears in My Courses.

**Acceptance criteria**

- Only eligible students can enroll.
- Duplicate enrollments are prevented.
- Students cannot access restricted course materials without enrollment.
- Enrollment status is stored in MongoDB.

### 6.6 Student Completes Lessons

**Journey**

1. Student opens My Courses.
2. Selects an enrolled course.
3. Opens the course player.
4. Selects a section and lesson.
5. Views the learning material.
6. Marks the lesson complete.
7. Backend records lesson progress.
8. Course progress percentage updates.

**Acceptance criteria**

- Only enrolled students can access restricted lessons.
- Students can access their own progress records.
- Completed lessons remain marked as completed.
- Progress is calculated from valid lesson completion records.

### 6.7 Assignment Creation and Submission

**Journey**

1. Instructor opens Assignments.
2. Selects Create Assignment.
3. Selects a course.
4. Enters title, description, deadline and marks.
5. Publishes the assignment.
6. Student views the assignment.
7. Student submits text or an allowed file.
8. Instructor views submissions.
9. Instructor evaluates the submission.
10. Instructor provides marks and feedback.
11. Student views the result.

**Acceptance criteria**

- Only the course instructor or an authorized admin can create and manage assignments.
- Only eligible enrolled students can submit.
- File types and upload sizes are validated.
- Submission timestamps are recorded.
- Marks do not exceed the assignment's maximum marks.
- Students only view their own submission and feedback.

### 6.8 Quiz Creation and Attempt

**Journey**

1. Instructor creates a quiz.
2. Instructor adds questions and answer options.
3. Instructor configures duration, marks and attempt limits.
4. Instructor publishes the quiz.
5. Student opens available quizzes.
6. Student starts the quiz.
7. Backend records the attempt and start time.
8. Student answers questions.
9. Student submits the quiz.
10. Backend evaluates objective answers.
11. Student views the result.

**Acceptance criteria**

- Only eligible students can attempt a quiz.
- Attempt limits are enforced by the backend.
- Quiz start and end times are checked server-side.
- Correct answers are not exposed before submission.
- Quiz results are associated with the correct student and attempt.
- Invalid or duplicate submissions are handled safely.

### 6.9 Certificate Generation and Verification

**Journey**

1. Student completes the defined course requirements.
2. Backend checks eligibility.
3. Certificate is generated.
4. Unique certificate number is assigned.
5. Student accesses the certificate.
6. Student downloads or views the certificate.
7. External visitor opens the verification page.
8. Visitor enters the certificate number or scans its QR code.
9. System displays certificate validity.

**Acceptance criteria**

- A certificate is only issued to eligible students.
- Each certificate has a unique identifier.
- Revoked certificates display invalid status.
- Verification does not expose unnecessary student information.

---

## 7. User Stories

### 7.1 Administrator User Stories

| ID     | User story                                                                       | Priority |
| ------ | -------------------------------------------------------------------------------- | -------- |
| ADM-01 | As an admin, I want to log in securely so that I can access platform management. | Must     |
| ADM-02 | As an admin, I want to view platform statistics so that I can monitor activity.  | Must     |
| ADM-03 | As an admin, I want to view all registered users.                                | Must     |
| ADM-04 | As an admin, I want to activate or deactivate accounts.                          | Must     |
| ADM-05 | As an admin, I want to approve or reject instructors.                            | Must     |
| ADM-06 | As an admin, I want to review submitted courses.                                 | Must     |
| ADM-07 | As an admin, I want to manage course categories.                                 | Must     |
| ADM-08 | As an admin, I want to view enrollment records.                                  | Should   |
| ADM-09 | As an admin, I want to access platform reports.                                  | Should   |
| ADM-10 | As an admin, I want to review activity logs.                                     | Should   |

### 7.2 Instructor User Stories

| ID     | User story                                                              | Priority |
| ------ | ----------------------------------------------------------------------- | -------- |
| INS-01 | As an instructor, I want to log in securely.                            | Must     |
| INS-02 | As an instructor, I want to view my teaching dashboard.                 | Must     |
| INS-03 | As an instructor, I want to create courses.                             | Must     |
| INS-04 | As an instructor, I want to edit or delete my courses.                  | Must     |
| INS-05 | As an instructor, I want to organize courses into sections and lessons. | Must     |
| INS-06 | As an instructor, I want to upload learning materials.                  | Must     |
| INS-07 | As an instructor, I want to view enrolled students.                     | Must     |
| INS-08 | As an instructor, I want to create assignments.                         | Must     |
| INS-09 | As an instructor, I want to review and grade submissions.               | Must     |
| INS-10 | As an instructor, I want to create quizzes.                             | Must     |
| INS-11 | As an instructor, I want to view quiz results.                          | Should   |
| INS-12 | As an instructor, I want to publish course announcements.               | Should   |
| INS-13 | As an instructor, I want to monitor course performance.                 | Should   |

### 7.3 Student User Stories

| ID     | User story                                                | Priority |
| ------ | --------------------------------------------------------- | -------- |
| STU-01 | As a student, I want to register and log in.              | Must     |
| STU-02 | As a student, I want to browse available courses.         | Must     |
| STU-03 | As a student, I want to search and filter courses.        | Should   |
| STU-04 | As a student, I want to enroll in courses.                | Must     |
| STU-05 | As a student, I want to access enrolled course materials. | Must     |
| STU-06 | As a student, I want to track completed lessons.          | Must     |
| STU-07 | As a student, I want to submit assignments.               | Must     |
| STU-08 | As a student, I want to attempt quizzes.                  | Must     |
| STU-09 | As a student, I want to view marks and feedback.          | Must     |
| STU-10 | As a student, I want to track learning progress.          | Must     |
| STU-11 | As a student, I want to access earned certificates.       | Should   |
| STU-12 | As a student, I want to receive notifications.            | Should   |
| STU-13 | As a student, I want to bookmark useful courses.          | Could    |

---

## 8. Functional Requirements

Functional requirements define what the application must do.

### FR-01: Authentication and Account Management

**Description:** Provide secure authentication for administrators, instructors and students.

**Requirements**

- Student registration.
- Instructor application.
- Common login page.
- Logout.
- Password hashing.
- Password reset.
- Email verification, if enabled.
- Session or token management.
- Current-user profile retrieval.
- Account activation and deactivation.
- Role-based login redirection.

**Acceptance criteria**

- Each registered email address is unique.
- Passwords are securely hashed.
- Authentication is verified on protected requests.
- Role information is obtained from trusted backend data.
- Public registration never grants administrator privileges.

### FR-02: Role-Based Access Control

**Description:** Restrict functionality and data according to user roles (Admin, Instructor, Student).

**Requirements**

- Admin can manage platform-wide resources.
- Instructor can manage their own courses and associated learning activities.
- Student can access their own enrollments, submissions, quiz attempts, results and progress.
- Unauthorized API requests are rejected.
- Resource ownership is checked by the backend.

### FR-03: User Management

- View users.
- Search users.
- Filter users by role and account status.
- View user details.
- Update permitted user information.
- Activate and deactivate accounts.
- Approve and reject instructor applications.

### FR-04: Course Management

- Create courses.
- Update courses.
- Delete or archive courses.
- Save drafts.
- Submit courses for approval.
- Approve or reject courses.
- Publish courses.
- Assign course categories.
- Set course difficulty.
- Add course descriptions and thumbnails.
- Search and filter published courses.

### FR-05: Curriculum Management

- Create, update and delete sections.
- Reorder sections.
- Create, update and delete lessons.
- Reorder lessons.
- Support video, text, PDF and external-link lesson types.
- Control free preview lessons.

### FR-06: Enrollment Management

- Enroll students in courses.
- Prevent duplicate enrollments.
- View student enrollments.
- Track enrollment status.
- Support active, completed and cancelled states.
- Restrict access to enrolled course materials.

### FR-07: Learning Progress

- Track completed lessons.
- Calculate course completion percentage.
- Display progress on student dashboards.
- Store lesson completion timestamps.
- Display completed and pending learning activities.

### FR-08: Assignment Management

- Create, edit and delete assignments.
- Publish and close assignments.
- Configure deadlines and maximum marks.
- Accept text submissions.
- Accept permitted file submissions.
- Display student submissions.
- Grade submissions and provide instructor feedback.
- Display grades to students.

### FR-09: Quiz Management

- Create, edit and delete quizzes.
- Add and manage questions.
- Support multiple-choice and true/false questions.
- Configure duration, total marks and passing marks.
- Configure attempt limits and availability dates.
- Record quiz attempts.
- Automatically grade supported question types.
- Display results.
- Provide basic quiz analytics.

### FR-10: Notifications

- Notify students about relevant course announcements.
- Notify students about assignment updates.
- Notify students about grades and feedback.
- Notify instructors about relevant student submissions.
- Maintain read and unread status.

### FR-11: Announcements

- Instructors can publish announcements for their own courses.
- Enrolled students can view relevant announcements.
- Announcements include title, message and timestamp.
- Instructors can edit or delete their announcements.

### FR-12: Course Reviews

- Eligible students can submit course ratings and comments.
- Ratings follow a defined range.
- Students can view course reviews.
- Duplicate reviews per student and course are prevented or updated.

### FR-13: Certificate Management

- Check course completion eligibility.
- Generate certificates with unique certificate numbers.
- Allow students to view or download certificates.
- Provide public certificate verification.
- Support certificate revocation by authorized administrators.

### FR-14: Dashboard Analytics

**Admin dashboard**

- Total students.
- Total instructors.
- Total courses.
- Total enrollments.
- Pending instructor approvals.
- Pending course approvals.

**Instructor dashboard**

- Total courses.
- Total enrolled students.
- Pending assignment submissions.
- Published quizzes.
- Course performance.

**Student dashboard**

- Enrolled courses.
- Completed courses.
- Learning progress.
- Pending assignments.
- Upcoming quizzes.
- Recent results.

> All statistics must be calculated from actual database records. Sample or placeholder values must not be presented as live statistics.

---

## 9. Non-Functional Requirements

### NFR-01: Performance

- Normal dashboard pages load efficiently under expected project usage.
- API endpoints avoid unnecessary database queries.
- Large lists use pagination.
- Frequently accessed database fields are indexed.
- Images and static assets are optimized.
- Loading indicators are displayed during asynchronous operations.

### NFR-02: Security

- Passwords are hashed using bcrypt or an equivalent secure algorithm.
- Authentication credentials are handled securely.
- Sensitive routes require authentication.
- Role permissions are enforced on the backend.
- User input is validated.
- File uploads are restricted by type and size.
- Security headers are configured.
- Rate limiting protects authentication endpoints.
- Secrets are stored in environment variables.
- Production traffic uses HTTPS.
- Cookie-based authentication includes appropriate CSRF protection.
- Sensitive quiz answers are not exposed to students before submission.

### NFR-03: Usability

- The interface is intuitive and navigation is consistent.
- Forms display clear validation messages.
- Buttons have meaningful labels.
- Tables are easy to read.
- Important actions provide confirmation or feedback.
- Errors are understandable without technical knowledge.

### NFR-04: Responsiveness

The application must support desktop computers, laptops, tablets and mobile phones. Layouts, tables, forms, navigation and course-player components must adapt to different screen sizes.

### NFR-05: Maintainability

- Frontend code is organized into reusable components.
- Backend code follows modular separation.
- Routes, controllers, models and middleware have clear responsibilities.
- Duplicate business logic is avoided.
- Naming conventions are consistent.
- Important functions and complex business rules are documented.

### NFR-06: Reliability

- Database failures are handled gracefully.
- API errors return consistent responses.
- Important data is not silently lost.
- Destructive operations use appropriate confirmation.
- Production database backups are configured.

### NFR-07: Scalability

- Database relationships and indexes support growth.
- API design supports pagination and filtering.
- File storage uses external storage rather than application-server local files in production.
- Business logic remains modular to support future extensions.

### NFR-08: Accessibility

- Forms have proper labels.
- Interactive elements are keyboard accessible.
- Images have meaningful alternative text.
- Color contrast remains readable.
- Error messages are clearly associated with their inputs.

---

## 10. Pages and Screens

> Page IDs use distinct prefixes (PUB, APG, IPG, SPG) so they do not collide with the user-story IDs in Section 7.

### 10.1 Public Website

| ID     | Page                     | Description                                   |
| ------ | ------------------------ | --------------------------------------------- |
| PUB-01 | Home                     | Platform introduction and featured courses    |
| PUB-02 | About                    | Platform information                          |
| PUB-03 | Courses                  | Public course catalogue                       |
| PUB-04 | Course Details           | Course information and enrollment entry point |
| PUB-05 | Instructors              | Instructor directory                          |
| PUB-06 | Contact                  | Contact form                                  |
| PUB-07 | Login                    | Common authentication page                    |
| PUB-08 | Student Registration     | Student signup                                |
| PUB-09 | Instructor Registration  | Instructor application                        |
| PUB-10 | Forgot Password          | Password recovery request                     |
| PUB-11 | Reset Password           | Set new password                              |
| PUB-12 | Certificate Verification | Verify issued certificates                    |

### 10.2 Admin Dashboard

| ID     | Page                 | Description                      |
| ------ | -------------------- | -------------------------------- |
| APG-01 | Dashboard            | Platform overview and statistics |
| APG-02 | Users                | All user records                 |
| APG-03 | Students             | Student management               |
| APG-04 | Instructors          | Instructor management            |
| APG-05 | Instructor Approvals | Review instructor applications   |
| APG-06 | Courses              | All platform courses             |
| APG-07 | Course Approvals     | Review submitted courses         |
| APG-08 | Categories           | Category management              |
| APG-09 | Enrollments          | Enrollment records               |
| APG-10 | Reports              | Platform analytics               |
| APG-11 | Certificates         | Certificate management           |
| APG-12 | Activity Logs        | Administrative activity          |
| APG-13 | Settings             | Platform configuration           |
| APG-14 | Profile              | Admin profile                    |

### 10.3 Instructor Dashboard

| ID     | Page             | Description                  |
| ------ | ---------------- | ---------------------------- |
| IPG-01 | Dashboard        | Teaching overview            |
| IPG-02 | My Courses       | Instructor-owned courses     |
| IPG-03 | Create Course    | New course form              |
| IPG-04 | Edit Course      | Course editing               |
| IPG-05 | Curriculum       | Sections and lessons         |
| IPG-06 | Upload Materials | Learning resource management |
| IPG-07 | Students         | Enrolled student list        |
| IPG-08 | Assignments      | Assignment management        |
| IPG-09 | Submissions      | Student submissions          |
| IPG-10 | Grading          | Marks and feedback           |
| IPG-11 | Quizzes          | Quiz management              |
| IPG-12 | Question Bank    | Quiz questions               |
| IPG-13 | Announcements    | Course announcements         |
| IPG-14 | Analytics        | Course performance           |
| IPG-15 | Profile          | Instructor profile           |

### 10.4 Student Dashboard

| ID     | Page              | Description                 |
| ------ | ----------------- | --------------------------- |
| SPG-01 | Dashboard         | Learning overview           |
| SPG-02 | Explore Courses   | Course catalogue            |
| SPG-03 | Course Details    | Course information          |
| SPG-04 | My Courses        | Enrolled courses            |
| SPG-05 | Course Player     | Lesson viewing              |
| SPG-06 | Assignments       | Assignment list             |
| SPG-07 | Submit Assignment | Submission form             |
| SPG-08 | Quizzes           | Available quizzes           |
| SPG-09 | Attempt Quiz      | Quiz interface              |
| SPG-10 | Results           | Quiz and assignment results |
| SPG-11 | Progress          | Learning progress           |
| SPG-12 | Certificates      | Earned certificates         |
| SPG-13 | Notifications     | User notifications          |
| SPG-14 | Profile           | Student profile             |

---

## 11. Roles and Permissions

### 11.1 Role Definitions

- **Admin:** platform-wide management permissions.
- **Instructor:** permissions over their own courses and associated academic activities.
- **Student:** permissions over their own learning activities and records.

### 11.2 Permission Matrix

| Functionality          | Admin                  | Instructor                    | Student          |
| ---------------------- | ---------------------- | ----------------------------- | ---------------- |
| View public courses    | Yes                    | Yes                           | Yes              |
| Login                  | Yes                    | Yes                           | Yes              |
| Manage all users       | Yes                    | No                            | No               |
| Approve instructors    | Yes                    | No                            | No               |
| Manage categories      | Yes                    | No                            | No               |
| View all courses       | Yes                    | Limited                       | Published        |
| Create courses         | Yes                    | Yes                           | No               |
| Edit courses           | Yes                    | Own courses                   | No               |
| Delete courses         | Yes                    | Own courses, subject to rules | No               |
| Approve courses        | Yes                    | No                            | No               |
| Manage lessons         | Yes                    | Own courses                   | No               |
| Enroll in courses      | Admin action if needed | No                            | Yes              |
| View enrolled students | Yes                    | Own courses                   | No               |
| Access lessons         | Administrative access  | Own courses                   | Enrolled courses |
| Create assignments     | Yes                    | Own courses                   | No               |
| Submit assignments     | No                     | No                            | Own submissions  |
| Grade submissions      | Yes                    | Own courses                   | No               |
| Create quizzes         | Yes                    | Own courses                   | No               |
| Attempt quizzes        | No                     | No                            | Eligible courses |
| View own results       | Yes                    | Relevant courses              | Yes              |
| View platform reports  | Yes                    | No                            | No               |
| View own progress      | Yes                    | No                            | Yes              |
| Manage certificates    | Yes                    | No                            | Own certificates |

### 11.3 Authorization Rules

1. Every protected API must authenticate the requester.
2. Every protected operation must verify the user's role.
3. Instructors must only access resources belonging to their courses.
4. Students must only access their own enrollments and academic records.
5. Students cannot change their role through frontend requests.
6. Instructors cannot approve their own applications.
7. Administrators must be created through a controlled process.
8. Frontend route guards must never replace backend authorization.
9. Unauthorized requests must return appropriate HTTP status codes.
10. Account deactivation must prevent further authenticated access.

---

## 12. Data Requirements

### 12.1 Database

- Database: MongoDB
- Database name: `edusphere_db`
- ODM: Mongoose

### 12.2 Core Collections

| Collection           | Purpose                                    |
| -------------------- | ------------------------------------------ |
| `users`              | Authentication, identity and roles         |
| `studentProfiles`    | Student-specific profile data              |
| `instructorProfiles` | Instructor information and approval status |
| `categories`         | Course categories                          |
| `courses`            | Course details                             |
| `sections`           | Course sections                            |
| `lessons`            | Lesson content                             |
| `enrollments`        | Student-course relationships               |
| `lessonProgress`     | Lesson completion records                  |
| `assignments`        | Assignment information                     |
| `submissions`        | Student submissions                        |
| `quizzes`            | Quiz configuration                         |
| `questions`          | Quiz questions                             |
| `quizAttempts`       | Student quiz attempts and results          |
| `reviews`            | Course ratings and feedback                |
| `announcements`      | Course announcements                       |
| `notifications`      | User notifications                         |
| `certificates`       | Issued certificates                        |
| `discussions`        | Course discussion records                  |
| `activityLogs`       | Important platform actions                 |

### 12.3 Important Data Relationships

- One user has one student profile or instructor profile, depending on role.
- One instructor can create multiple courses.
- One category can contain multiple courses.
- One course can contain multiple sections; one section can contain multiple lessons.
- One student can enroll in multiple courses; one course can have multiple enrollments.
- One course can contain multiple assignments; one assignment can have multiple submissions.
- One course can contain multiple quizzes; one quiz can contain multiple questions.
- One student can have multiple quiz attempts, subject to attempt limits.
- One student can earn certificates for multiple courses.

### 12.4 Schema Requirements

All relevant schemas must include unique identifiers, required-field validation, appropriate data types, timestamps where relevant, references to related documents, suitable indexes, and valid enumerated values for status and role fields.

| Schema          | Fields |
| --------------- | ------ |
| **User**        | `_id`, `name`, `email`, `password`, `role`, `profileImage`, `phone`, `isVerified`, `isApproved`, `isActive`, `lastLogin`, `createdAt`, `updatedAt` |
| **Course**      | `_id`, `title`, `slug`, `description`, `instructorId`, `categoryId`, `thumbnail`, `level`, `price`, `status`, `publishedAt`, `createdAt`, `updatedAt` |
| **Enrollment**  | `_id`, `studentId`, `courseId`, `status`, `progress`, `enrolledAt`, `completedAt`, `createdAt`, `updatedAt` |
| **Assignment**  | `_id`, `courseId`, `instructorId`, `title`, `description`, `deadline`, `totalMarks`, `status`, `createdAt`, `updatedAt` |
| **Submission**  | `_id`, `assignmentId`, `studentId`, `fileUrl`, `answerText`, `submittedAt`, `marksObtained`, `feedback`, `status`, `createdAt`, `updatedAt` |
| **Quiz**        | `_id`, `courseId`, `instructorId`, `title`, `duration`, `totalMarks`, `passingMarks`, `attemptLimit`, `startTime`, `endTime`, `status`, `createdAt`, `updatedAt` |
| **Quiz question** | `_id`, `quizId`, `question`, `type`, `options`, `correctAnswer`, `marks`, `createdAt`, `updatedAt` |
| **Certificate** | `_id`, `studentId`, `courseId`, `certificateNumber`, `issueDate`, `certificateUrl`, `isRevoked`, `createdAt`, `updatedAt` |

### 12.5 Data Integrity Rules

- Email addresses must be unique.
- Enrollment records must prevent duplicate student-course combinations.
- Lesson progress records must prevent duplicate student-lesson combinations.
- Quiz attempts must reference valid students and quizzes.
- Assignment submissions must reference valid assignments and students.
- Marks must not exceed maximum marks.
- Certificate numbers must be unique.
- Related resources must be checked before deletion.
- Important records must not be deleted in ways that leave invalid relationships.
- Sensitive information must not be returned unnecessarily through APIs.

---

## 13. API Requirements

All APIs use the common versioned prefix `/api/v1/`, follow REST conventions, and use appropriate HTTP methods and status codes.

### 13.1 Authentication APIs

| Method | Endpoint                    | Description            |
| ------ | --------------------------- | ---------------------- |
| POST   | `/auth/register`            | Student registration   |
| POST   | `/auth/instructor-register` | Instructor application |
| POST   | `/auth/login`               | User login             |
| POST   | `/auth/logout`              | User logout            |
| POST   | `/auth/refresh`             | Refresh authentication |
| GET    | `/auth/me`                  | Current user details   |
| POST   | `/auth/verify-email`        | Email verification     |
| POST   | `/auth/forgot-password`     | Password reset request |
| POST   | `/auth/reset-password`      | Password reset         |

### 13.2 User APIs

| Method | Endpoint                    | Description                              |
| ------ | --------------------------- | ---------------------------------------- |
| GET    | `/users`                    | List users                               |
| GET    | `/users/:id`                | Get user                                 |
| POST   | `/users`                    | Create user through admin                |
| PATCH  | `/users/:id`                | Update user                              |
| DELETE | `/users/:id`                | Deactivate or delete according to policy |
| PATCH  | `/users/:id/status`         | Change account status                    |
| PATCH  | `/instructors/:id/approval` | Approve or reject instructor             |

### 13.3 Course APIs

| Method | Endpoint                 | Description              |
| ------ | ------------------------ | ------------------------ |
| GET    | `/courses`               | List published courses   |
| GET    | `/courses/:id`           | Get course details       |
| POST   | `/courses`               | Create course            |
| PATCH  | `/courses/:id`           | Update course            |
| DELETE | `/courses/:id`           | Delete or archive course |
| PATCH  | `/courses/:id/publish`   | Submit or publish course |
| GET    | `/courses/:id/students`  | List enrolled students   |
| GET    | `/courses/:id/analytics` | Course analytics         |

### 13.4 Curriculum APIs

| Method | Endpoint                | Description    |
| ------ | ----------------------- | -------------- |
| GET    | `/courses/:id/sections` | List sections  |
| POST   | `/courses/:id/sections` | Create section |
| PATCH  | `/sections/:id`         | Update section |
| DELETE | `/sections/:id`         | Delete section |
| GET    | `/sections/:id/lessons` | List lessons   |
| POST   | `/sections/:id/lessons` | Create lesson  |
| PATCH  | `/lessons/:id`          | Update lesson  |
| DELETE | `/lessons/:id`          | Delete lesson  |

### 13.5 Enrollment and Progress APIs

| Method | Endpoint                   | Description          |
| ------ | -------------------------- | -------------------- |
| POST   | `/courses/:id/enroll`      | Enroll student       |
| GET    | `/enrollments/my`          | Student enrollments  |
| GET    | `/courses/:id/enrollments` | Course enrollments   |
| GET    | `/progress/:courseId`      | Course progress      |
| PATCH  | `/lessons/:id/complete`    | Mark lesson complete |

### 13.6 Assignment APIs

| Method | Endpoint                       | Description        |
| ------ | ------------------------------ | ------------------ |
| GET    | `/assignments`                 | List assignments   |
| POST   | `/assignments`                 | Create assignment  |
| GET    | `/assignments/:id`             | Assignment details |
| PATCH  | `/assignments/:id`             | Update assignment  |
| DELETE | `/assignments/:id`             | Delete assignment  |
| POST   | `/assignments/:id/submit`      | Submit assignment  |
| GET    | `/assignments/:id/submissions` | List submissions   |
| PATCH  | `/submissions/:id/grade`       | Grade submission   |

### 13.7 Quiz APIs

| Method | Endpoint                    | Description        |
| ------ | --------------------------- | ------------------ |
| GET    | `/quizzes`                  | List quizzes       |
| POST   | `/quizzes`                  | Create quiz        |
| GET    | `/quizzes/:id`              | Quiz details       |
| PATCH  | `/quizzes/:id`              | Update quiz        |
| DELETE | `/quizzes/:id`              | Delete quiz        |
| POST   | `/quizzes/:id/questions`    | Add question       |
| PATCH  | `/questions/:id`            | Update question    |
| DELETE | `/questions/:id`            | Delete question    |
| POST   | `/quizzes/:id/start`        | Start quiz attempt |
| POST   | `/quizzes/:id/submit`       | Submit quiz        |
| GET    | `/quiz-attempts/:id/result` | Get result         |

### 13.8 Additional APIs

| Module        | Endpoint examples                                  |
| ------------- | -------------------------------------------------- |
| Reviews       | `/courses/:id/reviews`                             |
| Announcements | `/courses/:id/announcements`                       |
| Notifications | `/notifications`                                   |
| Certificates  | `/certificates/my`, `/certificates/verify/:number` |
| Discussions   | `/courses/:id/discussions`                         |
| Reports       | `/admin/reports/overview`                          |

### 13.9 API Response Standards

Responses must:

- Use consistent JSON structures.
- Include meaningful success or error messages.
- Return appropriate HTTP status codes.
- Avoid exposing internal server errors.
- Avoid returning password hashes and sensitive fields.
- Support pagination for large datasets.
- Validate request parameters and payloads.

---

## 14. Integrations

Only integrations required by implemented functionality should be introduced.

| Integration              | Purpose                                      | Priority |
| ------------------------ | -------------------------------------------- | -------- |
| MongoDB Atlas            | Cloud database                               | Must     |
| Cloudinary or equivalent | Store images and uploaded learning materials | Should   |
| Nodemailer               | Email verification and notifications         | Should   |
| Chart.js                 | Dashboard analytics                          | Should   |
| PDFKit                   | Certificate and report generation            | Should   |
| QRCode library           | Certificate verification                     | Should   |
| Socket.IO                | Real-time messaging                          | Could    |
| Payment gateway sandbox  | Future paid-course functionality             | Could    |

### Integration Rules

- API keys must be stored in environment variables.
- External services must have error handling.
- Uploads must be validated before storage.
- External services must not be the primary database for application records.
- Integrations must be tested independently.
- Payment processing must not be introduced into the MVP unless explicitly approved.

---

## 15. Loading, Empty and Error States

Every major screen must handle loading, empty, success and failure states.

### 15.1 Loading States

**Examples:** dashboard data loading, course list loading, student list loading, assignment submission in progress, quiz submission processing, certificate generation.

**Requirements**

- Display a visible loading indicator.
- Prevent duplicate submissions while requests are processing.
- Preserve user-entered form data where possible.
- Avoid showing incomplete or misleading data.

### 15.2 Empty States

| Screen             | Empty-state message                   |
| ------------------ | ------------------------------------- |
| Admin users        | No users registered yet.              |
| Instructor courses | You have not created any courses yet. |
| Student courses    | You are not enrolled in any courses.  |
| Assignments        | No assignments available.             |
| Submissions        | No submissions received yet.          |
| Quizzes            | No quizzes available.                 |
| Notifications      | You have no notifications.            |
| Certificates       | No certificates earned yet.           |
| Search results     | No matching results found.            |

Empty states should provide a relevant action when possible, such as Create Course or Explore Courses.

### 15.3 Error States

The system must handle: network errors, server errors, database connection failures, invalid form inputs, authentication failures, unauthorized access, missing records, duplicate records, file upload errors, expired sessions, and failed external integrations.

**Standard error handling**

| HTTP status | Meaning                            | Expected behaviour                  |
| ----------- | ---------------------------------- | ----------------------------------- |
| 400         | Invalid request                    | Display validation message          |
| 401         | Authentication required            | Redirect to login where appropriate |
| 403         | Permission denied                  | Display access-denied page          |
| 404         | Resource not found                 | Display not-found message           |
| 409         | Duplicate or conflicting operation | Explain the conflict                |
| 413         | File too large                     | Display upload-size error           |
| 429         | Too many requests                  | Ask user to retry later             |
| 500         | Server error                       | Display generic error message       |

> Never display database credentials, stack traces, secrets or internal server information to users.

### 15.4 Success States

Provide feedback after: successful registration, login, course creation, course approval, enrollment, lesson completion, assignment submission, grading, quiz submission, and certificate generation.

---

## 16. MVP Scope

The MVP is the first complete and usable version of EduSphere. It focuses on the essential learning-management workflow instead of every possible LMS feature.

### 16.1 MVP Features

**Authentication**

- Student registration.
- Instructor registration and approval.
- Admin login.
- Common login system.
- Logout.
- Password hashing.
- Role-based redirection.
- Protected routes and API endpoints.

**Admin**

- Admin dashboard.
- User management.
- Instructor approval.
- Course approval.
- Category management.
- Course management.
- Basic platform statistics.

**Instructor**

- Instructor dashboard.
- Create, update and delete own courses.
- Manage sections and lessons.
- Upload learning materials.
- View enrolled students.
- Create assignments.
- Review and grade submissions.
- Create quizzes.
- View course statistics.

**Student**

- Student dashboard.
- Explore courses and view course details.
- Enroll in courses.
- Access lessons and track lesson completion.
- Submit assignments.
- Attempt quizzes.
- View grades and results.
- Track learning progress.

**Shared functionality**

- Responsive interface.
- Search and filtering.
- Pagination.
- Form validation.
- Loading, empty and error states.
- Secure API communication.
- MongoDB persistence.

### 16.2 Features Deferred Beyond MVP

Implement only after the core product is stable:

- Real-time chat.
- AI-powered learning assistant.
- Paid course subscriptions.
- Payment gateway integration.
- Multi-organization management.
- Advanced recommendation algorithms.
- Advanced question bank analytics.
- Live video classes.
- Advanced discussion forums.
- Complex gamification systems.
- Mobile applications.

### 16.3 Optional Post-MVP Features

- Certificate generation and verification.
- QR-code certificates.
- Email notifications.
- Course reviews and ratings.
- Learning bookmarks.
- PDF and CSV exports.
- Advanced analytics.
- Activity monitoring.

---

## 17. Out-of-Scope Items

The following are not part of the initial MVP:

1. Native Android or iOS applications.
2. Live video conferencing.
3. Third-party video meeting integration.
4. Full e-commerce marketplace functionality.
5. Complex subscription billing.
6. Automated AI tutoring.
7. AI-generated examination questions.
8. Biometric attendance.
9. Advanced proctoring and examination surveillance.
10. Multi-tenant enterprise infrastructure.
11. Blockchain-based certificates.
12. Advanced recommendation engines.
13. Offline course downloads and synchronization.

These may be considered in future versions following explicit product approval.

---

## 18. Success Criteria and Acceptance Metrics

EduSphere is successful when the core educational workflows function correctly from beginning to end.

### 18.1 Functional Success Criteria

| ID    | Success criterion    | Expected result                                  |
| ----- | -------------------- | ------------------------------------------------ |
| SC-01 | Student registration | Student can register successfully                |
| SC-02 | Instructor approval  | Admin can approve or reject instructors          |
| SC-03 | Authentication       | All three roles can log in securely              |
| SC-04 | Role authorization   | Unauthorized roles cannot access restricted APIs |
| SC-05 | Course creation      | Instructor can create and manage courses         |
| SC-06 | Course approval      | Admin can approve submitted courses              |
| SC-07 | Enrollment           | Student can enroll in published courses          |
| SC-08 | Learning             | Student can access eligible lessons              |
| SC-09 | Progress             | Completed lessons update course progress         |
| SC-10 | Assignment           | Student can submit assignments                   |
| SC-11 | Grading              | Instructor can grade submissions                 |
| SC-12 | Quiz                 | Student can attempt available quizzes            |
| SC-13 | Results              | Students can view their own results              |
| SC-14 | Analytics            | Dashboards display actual database statistics    |
| SC-15 | Responsive UI        | Main pages work on desktop and mobile            |

### 18.2 Security Success Criteria

- No plain-text passwords are stored.
- Public users cannot create administrator accounts.
- Role permissions are enforced by the backend.
- Students cannot access another student's private academic records.
- Instructors cannot modify another instructor's resources.
- Sensitive quiz answers remain protected.
- Invalid and unauthorized requests are rejected.
- Uploaded files follow the defined validation rules.

### 18.3 Quality Success Criteria

- No critical errors in the main user journeys.
- All core CRUD operations work correctly.
- Database relationships remain consistent.
- Forms display understandable validation errors.
- API endpoints are documented and tested.
- Main screens are responsive.
- Loading, empty and error states are implemented.

### 18.4 Suggested Project Metrics

These are proposed targets for testing, not claims about existing performance.

| Metric                          | Target                              |
| ------------------------------- | ----------------------------------- |
| Core user journeys              | 100% successfully tested            |
| Core API test coverage          | All critical endpoints tested       |
| Unauthorized access tests       | All defined permission tests pass   |
| Duplicate enrollment prevention | 100%                                |
| Password storage                | 100% hashed                         |
| Main screen responsiveness      | Desktop, tablet and mobile          |
| Critical bugs at release        | 0                                   |
| Core workflow completion        | Successful end-to-end demonstration |

---

## 19. Development Phases

| Phase    | Work                                        | Deliverable             |
| -------- | ------------------------------------------- | ----------------------- |
| Phase 1  | Requirements, architecture and UI planning  | Project foundation      |
| Phase 2  | Frontend structure and reusable components  | Frontend prototype      |
| Phase 3  | Express backend and MongoDB connection      | Backend foundation      |
| Phase 4  | Authentication and role-based authorization | Secure login system     |
| Phase 5  | Admin user and course management            | Admin module            |
| Phase 6  | Instructor course and curriculum management | Instructor module       |
| Phase 7  | Student enrollment and learning progress    | Student learning module |
| Phase 8  | Assignments and grading                     | Assessment module       |
| Phase 9  | Quizzes and results                         | Examination module      |
| Phase 10 | Notifications and analytics                 | Supporting modules      |
| Phase 11 | Security and testing                        | Tested application      |
| Phase 12 | Deployment and documentation                | Final release           |

### Development Rules

- Build one functional module at a time.
- Complete frontend, backend and database integration for each module.
- Test each feature before moving to the next.
- Use reusable components.
- Maintain consistent naming conventions.
- Keep API documentation updated.
- Avoid unnecessary dependencies.
- Do not introduce frameworks outside the approved technology stack without approval.
- Keep the application runnable throughout development.

---

## 20. Technical Constraints and Coding Standards

### 20.1 Approved Technology Stack

| Layer              | Approved technology |
| ------------------ | ------------------- |
| Markup             | HTML5               |
| Styling            | CSS3                |
| Frontend logic     | Vanilla JavaScript  |
| Runtime            | Node.js             |
| Backend framework  | Express.js          |
| Database           | MongoDB             |
| Database modelling | Mongoose            |
| API architecture   | REST                |
| API testing        | Postman             |
| Version control    | Git and GitHub      |

**Technology restrictions**

- Do not introduce React, Angular or Vue.js.
- Do not introduce TypeScript unless explicitly approved.
- Do not replace MongoDB with a relational database.
- Do not use a separate backend framework.
- Do not introduce unnecessary microservices.
- Do not create multiple independent frontend applications for the three roles.
- Bootstrap 5 may be used as an optional UI library, but custom CSS must maintain the product's visual identity.

### 20.2 Frontend Standards

- Use semantic HTML.
- Use responsive CSS.
- Organize JavaScript by feature.
- Use reusable components for repeated interface elements.
- Use the Fetch API for backend communication.
- Keep API communication separate from page-specific UI logic.
- Validate inputs on the frontend and backend.
- Never trust frontend validation as a security mechanism.
- Avoid unnecessary inline JavaScript and CSS.

### 20.3 Backend Standards

- Separate routes, controllers, models, middleware and services.
- Use asynchronous error handling.
- Validate incoming requests.
- Apply authentication middleware to protected routes.
- Apply authorization middleware to role-specific routes.
- Check ownership of resources.
- Use consistent API response formats.
- Keep sensitive configuration in environment variables.
- Avoid exposing database implementation details to the frontend.

### 20.4 Database Standards

- Use Mongoose schemas.
- Define required fields.
- Use appropriate references.
- Create useful indexes.
- Prevent duplicate records through database constraints.
- Validate status and role fields.
- Use pagination for large datasets.
- Avoid storing unnecessary duplicated information.
- Protect sensitive data.

---

## 21. Assumptions

| ID   | Assumption                                                                  |
| ---- | --------------------------------------------------------------------------- |
| A-01 | EduSphere is a web-based application.                                       |
| A-02 | The MVP has three roles: Admin, Instructor and Student.                     |
| A-03 | All roles use one authentication system.                                    |
| A-04 | Students can register themselves.                                           |
| A-05 | Instructor registrations require admin approval.                            |
| A-06 | The first administrator is created through a controlled setup process.      |
| A-07 | Courses require approval before public publishing.                          |
| A-08 | The initial platform supports free enrollment.                              |
| A-09 | Courses contain sections and lessons.                                       |
| A-10 | Lessons can contain video, text, PDF or external links.                     |
| A-11 | The initial quiz system supports objective questions.                       |
| A-12 | Course progress is calculated using completed lessons.                      |
| A-13 | Certificates are issued after defined completion requirements are met.      |
| A-14 | English is the initial application language.                                |
| A-15 | The application will initially support desktop, tablet and mobile browsers. |

---

## 22. Decisions Requiring Product Owner Approval

These decisions must be confirmed before the coding agent implements the relevant functionality.

| ID   | Decision                   | Current proposal                                                                 | Approval needed |
| ---- | -------------------------- | -------------------------------------------------------------------------------- | --------------- |
| D-01 | Instructor approval        | Manual admin approval                                                            | Yes             |
| D-02 | Course approval            | Admin approval before publishing                                                 | Yes             |
| D-03 | Course pricing             | Free courses in MVP                                                              | Yes             |
| D-04 | Email verification         | Enable during registration                                                       | Yes             |
| D-05 | Authentication             | Secure cookie-based sessions or short-lived access tokens with refresh mechanism | Yes             |
| D-06 | Assignment submission      | Text and file uploads                                                            | Yes             |
| D-07 | Quiz question types        | MCQ and true/false initially                                                     | Yes             |
| D-08 | Certificate eligibility    | Based on course completion requirements                                          | Yes             |
| D-09 | Course deletion            | Archive or controlled deletion                                                   | Yes             |
| D-10 | File storage               | Cloud-based file storage                                                         | Yes             |
| D-11 | Course reviews             | Post-MVP                                                                         | Yes             |
| D-12 | Notifications              | In-app notifications first                                                       | Yes             |
| D-13 | Multi-organization support | Not included in MVP                                                              | Yes             |
| D-14 | Payment integration        | Not included in MVP                                                              | Yes             |

> **Coding agent instruction:** Do not silently change these decisions. Use the current proposals as provisional defaults, clearly identify unresolved decisions, and request product-owner approval before implementing functionality that depends on them.

---

## 23. Final Product Definition

EduSphere is a unified, role-based Learning Management System built with HTML, CSS, JavaScript, Node.js, Express.js and MongoDB. The initial release must provide three functional dashboards connected to a centralized authentication system, REST API and database.

**Primary product workflow**

1. Admin manages platform users and approvals.
2. Instructor creates and manages courses.
3. Admin approves courses.
4. Students discover and enroll in courses.
5. Instructors publish lessons, assignments and quizzes.
6. Students study, submit assignments and attempt quizzes.
7. Instructors evaluate student work.
8. Students view their grades and learning progress.
9. Eligible students receive course completion certificates.

The application must prioritize security, maintainability, usability, data integrity and reliable end-to-end functionality.

The MVP is complete when all three roles can successfully perform their essential activities through the same integrated platform, and the complete course-learning-assessment workflow works from beginning to end.

---

## 24. Instructions for the AI Coding Agent

This PRD is the authoritative product requirements document for EduSphere. The coding agent must:

1. Read and understand the complete PRD before starting development.
2. Treat the approved technology stack as mandatory.
3. Not introduce unapproved frameworks or unnecessary technologies.
4. Not invent new product features.
5. Follow the defined user roles and permission boundaries.
6. Implement backend authorization for every protected operation.
7. Maintain consistent database schemas and API contracts.
8. Build reusable frontend components.
9. Implement loading, empty, success and error states.
10. Validate all user input on the backend.
11. Test each module before proceeding.
12. Not use placeholder data as actual application statistics.
13. Not leave important buttons or forms non-functional.
14. Not claim a feature is complete until its frontend, backend and database functionality has been tested.
15. Update technical documentation when implementation decisions change.
16. Ask for approval when a decision is explicitly marked as requiring product-owner approval.
17. Prioritize the MVP before implementing post-MVP extensions.
18. Keep the project runnable throughout development.
19. Report completed features, known issues and remaining work honestly.
20. Ensure the final implementation satisfies the success criteria defined in this document.

**Final objective:** Deliver a complete, secure, responsive and maintainable EduSphere Learning Management System that demonstrates real-world full-stack development practices and provides a functional experience for administrators, instructors and students.
