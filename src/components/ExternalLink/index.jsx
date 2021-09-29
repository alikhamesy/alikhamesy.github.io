const ExternalLink = ({ children, ...props }) => (
  <a target='_blank' rel='noreferrer' {...props}>
    {children}
  </a>
)

export default ExternalLink
