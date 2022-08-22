const questions = [
  {
    id: 1,
    content: 'Where is MRT?',
  },
  {
    id: 2,
    content: 'Where is Ubike?',
  },
  {
    id: 3,
    content: 'Where is toilet?',
  },
  {
    id: 4,
    content: 'Where is department store?',
  },
]

const FAQ = () => {
  return (
    <>
      <div className='faq'>FAQ</div>
      <div className='questions'>
        {questions.map((item) => {
          return (
            <p key={item.id}>
              Q{item.id}: {item.content}
            </p>
          )
        })}
      </div>
    </>
  )
}

export default FAQ
