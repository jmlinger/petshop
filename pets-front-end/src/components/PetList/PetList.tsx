import * as React from 'react';
import { IPet } from '../../interfaces/Pet';
import styles from './PetList.module.css';

export interface IAppProps {
  petsList: IPet[];
  handleDelete(id: number): void;
  handleEdit(pet: IPet): void;
}

function PetsList ({ petsList, handleDelete, handleEdit }: IAppProps) {
  return (
    <>
      {petsList.length > 0 ? (
        petsList.map((pet)=> (
          <div key={pet.id} className={styles.task}>
            <div className={styles.details}>
              <h4>Pet's name: {pet.name}</h4>
              <h5>{pet.tutorsName}</h5>
            </div>
            <div className={styles.actions}>
              <i className='bi bi-pencil' onClick={() => handleEdit(pet)}></i>
              <i className='bi bi-trash' onClick={() => handleDelete(pet.id)}></i>
            </div>
          </div>
        ))
      ) : (
        <p>Your pet list is empty!</p>
      )}
    </>
  );
}

export default PetsList;