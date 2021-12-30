import React, { useState, useEffect, useRef } from 'react'
import Meaning from './Meaning';
import 'bootstrap/dist/css/bootstrap.min.css';

function Search() {
    const [meaning, setMeaning] = useState([])
    const [word, setWord] = useState("")
    const ref = useRef(null)
    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"


    const submitForm = (e) => {
        e.preventDefault()
        setWord(ref.current.value)
    }

    useEffect(() => {
        async function fetchData() {
            if (word) {
                const response = await fetch(url + word)
                const meaning = await response.json()
                setMeaning(meaning)
                document.title = "React Dictionary App"
            }
        }
        fetchData()

    }, [word])


    return <>
        <main>
            <section className="searchSection" >
                <form className="formSection" onSubmit={submitForm}>
                    <input type="text" name="" ref={ref} className="form-control-plaintext" placeholder="Look up..." />
                    <button type="submit" className="btn btn-primary" >Search</button>
                </form>
            </section>

            <section className="resultSection" >
                <Meaning meaning={meaning} />
            </section>

        </main>
    </>
}

export default Search
