

function ListGroup(){
    const items = [
        'NewYork',
        'San Francisco',
        'London',
        'Tokyo',
        'Paris'
    ]

    return (
    <>
    <h1>List</h1>
    <ul className ="list-group">
        {items.map(item => <li>{item}</li>)}
    </ul>
  </>
  )
}

export default ListGroup;