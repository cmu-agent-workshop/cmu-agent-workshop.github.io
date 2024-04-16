export default {
    logo: (
      <>
        <img width="36" height="36" src="/logo.png" alt="Agent Workshop @ CMU" />
        <span style={{ marginLeft: '.4em', fontWeight: 800 }}>Agent Workshop @ Carnegie Mellon University</span>
      </>
    ),
    project: {
      link: 'https://cmu-agent-workshop.github.io/',
    },
    search: {
        placeholder: 'Search contents',
    },
    feedback: {
        content: null,
    },
    edit: {
        content: null,
    },
    footer: {
        text: (
          <span>
            MIT {new Date().getFullYear()} ©{' '}
            <a href="https://zhuhao.me" target="_blank">
              Hao Zhu
            </a>
            .
          </span>
        )
    },
    useNextSeoProps() {
        return {
        titleTemplate: '%s – Agent Workshop @ CMU',
        description: 'Agent Workshop 2024 brings together researchers and practitioners in the field of AI. The workshop will be held at Carnegie Mellon University, Pittsburgh, PA, USA.',
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: 'https://cmu-agent-workshop.github.io/',
            siteName: 'Agent Workshop @ CMU',
            description: 'Agent Workshop 2024 brings together researchers and practitioners in the field of AI. The workshop will be held at Carnegie Mellon University, Pittsburgh, PA, USA.',
        }
        }
        
    },
    // ... other theme options
  }