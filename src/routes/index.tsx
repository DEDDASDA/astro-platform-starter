import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ color: 'green', fontSize: '48px' }}>GITHUB API + LOVABLE = FUNCIONA!</h1>
      <p style={{ fontSize: '20px' }}>Sincronizado via API no arquivo correto!</p>
    </div>
  )
}
