import React from 'react'

const PetInfoAdd = ({petName, petSpecies, petAge, setPetName, setPetSpecies, setPetAge, submitHandler}) => {
  return (
    <form onSubmit={submitHandler}>
        <fieldset>
            <legend>새로운 애완동물을 추가하세요!</legend>
            <label htmlFor="pet__name">이름</label>
            <input type="text" id='pet__name' placeholder='이름' value={petName} onChange={(e)=>setPetName(e.target.value)} />
            <label htmlFor="pet__species">종</label>
            <input type="text" id="pet__species" placeholder='species' value={petSpecies} onChange={(e)=>setPetSpecies(e.target.value)} />
            <label htmlFor="pet__age">나이</label>
            <input type="text" id='pet__age' placeholder='나이' value={petAge} onChange={(e)=>setPetAge(e.target.value)} />
            <button type='submit'>추가하기</button>
        </fieldset>
    </form>
  )
}

export default PetInfoAdd