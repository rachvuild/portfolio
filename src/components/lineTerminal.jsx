export default function LineTerminal({ line }) {
  // state (état, données)

  // comportements

  return (
    <li className="liTerminal" dangerouslySetInnerHTML={{ __html: line }}></li>
  );
}
