import '../styles/tokens-grid.css';

type extraProps = {
  pixel?: boolean
}

interface TokensGridProps {
  tokens: Record<string, string>
  show?: extraProps;
}

export function TokensGrid({ tokens, show }: TokensGridProps) {
  return <table className="tokens-grid">
    <thead>
      <tr>
        <th>Name</th>
        <th>Value</th>
        {show?.pixel ? <th>Pixels</th> : null}
      </tr>
    </thead>

    <tbody>
      {Object.entries(tokens).map(([key, value]) => <tr key={key}>
        <td>{key}</td>
        <td>{value}</td>
        {show?.pixel ? <td>{Number(value.replace('rem', '')) * 16}px</td> : null}
      </tr>)}
    </tbody>
  </table>
}
