import { useRouter } from 'next/router'

export default {
    logo: <span>Agent Workshop @ Carnegie Mellon University</span>,
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
        const { asPath } = useRouter()
        if (asPath !== '/') {
          return {
            titleTemplate: '%s – Agent Workshop @ CMU',
          }
        }
    },
    // ... other theme options
  }