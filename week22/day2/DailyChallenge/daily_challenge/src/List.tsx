import React from 'react'
import { Book } from './App'


type ListProps = {
    entries: Book[],
    entryName: string,
    renderItem: (book: Book) => React.ReactNode
}

export default function List({entries, entryName, renderItem}: ListProps) {
  return (
    <div>
        <h2>List of {entryName}:</h2>
        {entries && 
            entries.map(entry => {
                return renderItem(entry)
            })
        }
    </div>
  )
}
