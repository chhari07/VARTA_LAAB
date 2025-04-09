import {
  ChatBubbleBottomCenterTextIcon,
  LightBulbIcon,
  UsersIcon,
  NewspaperIcon,
  GlobeAltIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Real-time Chatroom',
    description: 'Join real-time conversations and connect with people who share your interests across topics.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Voice of the People',
    description: 'Raise your voice on social issues and participate in meaningful discussions that matter.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Collaborative Workspaces',
    description: 'Work together on projects, manage tasks, and grow ideas in a unified space.',
    icon: UsersIcon,
  },
  {
    name: 'Community Blogs',
    description: 'Share your thoughts, experiences, or expert knowledge through personal and public blogs.',
    icon: NewspaperIcon,
  },
  {
    name: 'Q&A Forum',
    description: 'Ask questions and get answers from the community. Learn together, grow together.',
    icon: LightBulbIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-gradient-to-r from-orange-500 to-red-600">Discover Varta Laab</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gradient-to-r from-orange-500 to-red-600 sm:text-5xl">
                Empowering Community Voices
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                Varta Laabh is your digital space to express, collaborate, and engage with a vibrant community. Built for
                connection, powered by purpose.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-gradient-to-r from-orange-500 to-red-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="https://wallpapercave.com/uwp/uwp4739829.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4  lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
