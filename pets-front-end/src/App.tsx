import React, { useEffect, useState } from 'react';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import styles from './App.module.css'
import PetForm from './components/PetForm/PetForm';
import { IPet } from './interfaces/Pet';
import PetsList from './components/PetList/PetList';
import Modal from './components/Modal/Modal';
import { IoIosPaw } from "react-icons/io";
import { useMutation, useQuery } from 'urql';


const TotalPetsQuery = `
  query Query {
    pets {
      id
      name
      tutorsName
      age
      type
    }
  }
`

const CreatePetMutation = `
  mutation Mutation($createPetInput: CreatePetInput!) {
    createPet(createPetInput: $createPetInput) {
      id
      name
      tutorsName
      age
      type
    }
  }
`

const UpdatePetMutation = `
  mutation UpdatePet($updatePetInput: UpdatePetInput!) {
    updatePet(updatePetInput: $updatePetInput) {
      id
      name
      tutorsName
      age
      type
    }
  }
`

const removePetMutation = `
  mutation Mutation($removePetId: Int!) {
    removePet(id: $removePetId) {
      id
      name
      tutorsName
      age
      type
    }
  }
`

function App() {

  const [petsList, setPetsList] = useState<IPet[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<IPet | null>(null);
  const [{data: totalPetsData}] = useQuery({
    query: TotalPetsQuery,
  });
  const [_createPetResponse, createPet] = useMutation(CreatePetMutation);
  const [_updatePetResponse, updatePet] = useMutation(UpdatePetMutation);
  const [_removePetResponse, removePet] = useMutation(removePetMutation);

  useEffect(() => {
    if(totalPetsData) {
      setPetsList(totalPetsData.pets);
    }
  }, [totalPetsData]);
  
  
  const deleteTask = (id: number) => {
    setPetsList(petsList.filter((task) => {
      return task.id !== id;
    }));
    removePet({ removePetId: id });
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal');
    if(display) {
      modal!.classList.remove('hide');
    } else {
      modal!.classList.add('hide');
    }
  };

  const editTask = (task: IPet): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  }

  const updateTask = (id: number, tutorsName: string, name: string, age: number, type: string) => {

    const updatedTask: IPet = { id, tutorsName, name, age, type };
    updatePet({ updatePetInput: updatedTask });
    const updatedItems = petsList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    });

    setPetsList(updatedItems);

    hideOrShowModal(false);
  };

  return (
    <div className="App">
      <Modal children={
        <PetForm 
        btnText='Update informations' 
        petsList={petsList}
        task={taskToUpdate}
        handleUpdate={updateTask}
        createPet={createPet}
        />
      }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Registration Form  <IoIosPaw size='28px'/></h2> 
          <PetForm 
            btnText='Create new register' 
            petsList={petsList}
            setPetsList={setPetsList}
            createPet={createPet}
          />
        </div>
        <div>
          <h2>Pets List</h2>
          <PetsList 
            petsList={petsList} 
            handleDelete={deleteTask} 
            handleEdit={editTask}
          />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;