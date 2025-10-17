import Image from "next/image";
import styles from "./page.module.css";

const peeps = [
  {
    name: 'Wolverine',
    group: 'X-Men',
    id: 1,
  },
  {
    name: 'Iron Man',
    group: 'Avengers',
    id: 2,
  },
  {
    name: 'Colossus',
    group: 'X-Men',
    id: 3,
  },
  {
    name: 'Captain America',
    group: 'Avengers',
    id: 4,
  },
  {
    name: 'Spider-Man',
    group: 'Avengers',
    id: 5,
  },
];

const listItems = peeps.map((peep) => (
  <li
    className={styles.listItem}
    key={peep.id}
  >
    {peep.name}: {peep.group}
  </li>
));

export default function Home() {
  return (
    <div >
      <h1>Hellos</h1>
      <ul className={styles.list}>
        {listItems}
      </ul>
    </div>
  );
}
