return (
  <main>
    {/* Debug Status Bar - Remove this before final submission! */}
    <div style={{ padding: '10px', background: '#f0f0f0', border: '1px solid #ccc' }}>
      <p>Server Connection: {projects.length > 0 ? "✅ Connected" : "⏳ Loading or Server Offline..."}</p>
      <p>Projects Found: {projects.length}</p>
    </div>

    <ProjectForm onAddProject={handleAddProject} />
    <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    
    {/* Requirement: Only map if projects exist to prevent white screen crashes */}
    {projects.length > 0 ? (
      <ProjectList projects={displayedProjects} />
    ) : (
      <p style={{ textAlign: 'center' }}>No projects found. Check your terminal for Port 3001!</p>
    )}
  </main>
);