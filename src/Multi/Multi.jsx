import { useState } from "react";

const Multi = ({ table = 3 }) => {

    //! State pour stocker la valeur actuelle de la table de multi
    const [result, setResult] = useState(1);
    console.log('State', result);

    //! Fonction qui va se déclancher lors que l'utilisateur clic sur "X3"
    const handleMultiplication = () => {
        console.log(`Multi par ${table} !!!`);

        console.log('Avant', result);
        setResult(result => result * table);
        console.log('Apres', result);
    };

    //! Fonction pour remettre la valeur à 1
    const handleReset = () => {
        console.log(`Reset !!!`);

        setResult(1);
    }

    //! Rendu du composant
    return (
        <div>
            <h2>Multiplication par {table}</h2>
            <h3>La valeur : {result}</h3>
            <button onClick={handleMultiplication}> X{table} </button>
            <button onClick={handleReset}> Reset </button>
        </div>
    )
}

export default Multi;