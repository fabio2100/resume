$componentes = @("Profile", "Skills", "Experience", "Education", "Languages", "Courses", "Portfolio", "Footer")

foreach ($componente in $componentes) {
    $contenido = Get-Content -Path "F:\proyectos\resume\temp\app\components\$componente.tsx" -Raw
    $nuevoContenido = $contenido -replace '@/data/resume.json', '@/app/data/resume.json'
    $nuevoContenido = $nuevoContenido -replace "// src/components/$componente.tsx", "// app/components/$componente.tsx"
    Set-Content -Path "F:\proyectos\resume\temp\app\components\$componente.tsx" -Value $nuevoContenido
}

Write-Host "Actualización completada"
