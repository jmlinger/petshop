import * as React from 'react';
import { ICreatePet, INewPet, IPet } from '../../interfaces/Pet';
import styles from './PetForm.module.css';

export interface IAppProps {
  btnText: string;
  petsList: IPet[];
  setPetsList?: React.Dispatch<React.SetStateAction<IPet[]>>;
  task?: IPet | null;
  handleUpdate?(id: number, tutorsName: string, name: string, age: number, type: string): void;
  createPet: React.Dispatch<React.SetStateAction<ICreatePet>>
}

function PetForm ({ btnText, petsList, setPetsList, task, handleUpdate, createPet }: IAppProps) {

  const [id, setId] = React.useState<number>(0);
  const [tutorsName, setName] = React.useState<string>('');
  const [name, setname] = React.useState<string>('');
  const [age, setAge] = React.useState<number>(0);
  const [type, setType] = React.useState<string>('');
 
  React.useEffect(() => {
    if(task) {
      setId(task.id);
      setName(task.tutorsName);
      setname(task.name);
      setAge(task.age);
      setType(task.type);
    }
  }, [task]);

  const addTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(handleUpdate) {
      handleUpdate(id, tutorsName, name, age, type);

    } else {
        // const id = Math.floor(Math.random() * 1000);
        // const newPet: INewPet = { tutorsName, name, age, type };
        console.log({ tutorsName, name, age, type });
        createPet({ createPetInput: { tutorsName, name, age, type }});
        setPetsList!([...petsList, {id, tutorsName, name, age, type }]);
        setName('');
        setname('');
        setAge(0);
        setType('');
    } 
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "tutorsName") {
      setName(e.target.value) 
     } if (e.target.name === "name") {
       setname(e.target.value)
      }
      if (e.target.name === "age") {
        setAge(parseInt(e.target.value));
       } if (e.target.name === "type") {
         setType(e.target.value)
       }
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor='title'>Pet's Name:</label>
        <input 
          name='name' 
          onChange={handleChange}
          placeholder='name'
          type='text'
          value={name}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor='age'>Pet's Age:</label>
        <input 
          name='age' 
          onChange={handleChange}
          placeholder='age' 
          type='text' 
          value={age}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor='type'>Type:</label>
        <input 
          name='type' 
          onChange={handleChange}
          placeholder='type' 
          type='text' 
          value={type}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor='tutorsName'>Tutor's Name:</label>
        <input 
          name='tutorsName' 
          onChange={handleChange}
          placeholder='tutorsName'
          type='text'
          value={tutorsName}
        />
      </div>
      <input type='submit' value={btnText}/>
    </form>
  );
}

export default PetForm;