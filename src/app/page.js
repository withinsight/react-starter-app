'use client';

import React from "react";
import styles from "./page.module.css";

const peeps = [
  {
    avatar: 'avatar-logan.png',
    altText: 'Headshot of Wolverine with claws in front of his face',
    name: 'Wolverine',
    group: 'X-Men',
    id: 1,
  },
  {
    avatar: 'avatar-tony.png',
    altText: 'Headshot of Iron Man',
    name: 'Iron Man',
    group: 'Avengers',
    id: 2,
  },
  {
    avatar: 'avatar-thor.png',
    altText: 'Headshot of Thor with short hair',
    name: 'Thor',
    group: 'Avengers',
    id: 3,
  },
  {
    avatar: 'avatar-cap.png',
    altText: 'Headshot of Captain America with his mask off',
    name: 'Captain America',
    group: 'Avengers',
    id: 4,
  },
  {
    avatar: 'avatar-spidey.png',
    altText: 'Headshot of Spider-Man',
    name: 'Spider-Man',
    group: 'Avengers',
    id: 5,
  },
];

export function Image({url, altText}) {
  return (
    <img className={styles.avatar} src={url} alt={altText} />
  );
}

export default function Home() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const filteredPeeps = peeps.filter((peep) => (
    peep.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    peep.group.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div style={{padding: '10px'}}>
      <h1 style={{marginBottom: '20px'}}>MCU Characters</h1>
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className={styles.list}>
        {filteredPeeps.map((peep) => (
          <li
            key={peep.id}
            className={styles.listItem}
            style={{
              borderBottom: '1px solid #ccc',
              padding: '10px'
            }}
          >
            {peep.name}: {peep.group}
            <Image url={peep.avatar} altText={peep.altText} />
          </li>
        ))}
      </ul>
    </div>
  );
}
