import React1 from 'react'

function Columns() {
    const items = [
        {
            title: 'abdul',
            id: 1,
            description: 'describe'
        },
        {
            title: 'ansari',
            id: 2,
            description: 'describe'

        },
         {
            title: 'tanveer',
            id: 3,
            description: 'describe'

        },
    ]
    return (
        <React1.Fragment>
        {
            items.map(
                item => (
                    <React1.Fragment key = {item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </React1.Fragment>
                )
            )
        }
            <td> name</td>
            <td>abdul</td>
        </React1.Fragment>
    )
}

export default Columns
