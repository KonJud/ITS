import { data } from 'autoprefixer';
import React, { useEffect, useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { UserContext } from '../../context/userContext/userConstext';




const SignUp = () => {
    
    const {signUp} = useContext(UserContext);


    console.log(signUp)

    const inputs = useRef([])
    const addInputs = (el) => {
        if (el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }

    console.log(inputs.current)

    

    const [requiredValidation, setRequiredValidation] = useState('')
    const [pwdValidation, setPwdValidation] = useState("")
    const handleForm = async (e) => {
        e.preventDefault()
        

        if (inputs.current[0].value === "" 
            && inputs.current[1].value === ""
            && inputs.current[2].value === ""
            && inputs.current[3].value === ""
            && inputs.current[4].value === ""
            && inputs.current[5].value === ""
            && inputs.current[7].value === ""
            && inputs.current[8].value === ""
            && inputs.current[9].value === ""
            && inputs.current[11].value === ""
            && inputs.current[15].value === ""
            && inputs.current[16].value === ""
            ){
            setRequiredValidation("Ce champ est obligatoire");
            return;
        }
        if ((inputs.current[4].value.length || inputs.current[5].value.length) < 6) {
            setPwdValidation("6 charactères minimum");
            return;
        }else if (inputs.current[4].value !== inputs.current[5].value) {
            setPwdValidation("Vos mots de passe ne sont pas identiques");
            return;
        }


    }
  return (
    <>

            <div className='bg-PrimaryGray font-Poppins'>
                <div className="w-full sm:flex sm:w-3/4 mx-auto my-8">
                    <div className="bg-white  sm:w-2/3 mx-auto p-6 sm:px-20 pb-4">
                        <h1 className='text-3xl text-PrimaryBlue py-6 font-bold'>Formulaire d'enrégistrement</h1>
                        <hr className='-mx-20' />
                        
                        {/* Le formulaire */}
                        <div className="py-8">
                            <form   onSubmit={handleForm} className='' action="" method="">
                                {/* Information Personnel */}
                                <div className="mb-6">
                                    <div className="flex mb-4">
                                        <span className='flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500'>1</span>

                                        <span className='font-bold text-PrimaryBlue '> Information Personnel</span>
                                    </div>
                                    <div className="flex flex-wrap ">
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    ref={addInputs}
                                                    type="text" 
                                                    name="firstName" 
                                                    id="firstName" 
                                                    placeholder='Enter your input here'
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                    
                                                />
                                                <label 
                                                    htmlFor="firstName" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Nom
                                                </label>
                                                {/* <div className="text-pink-600 text-sm"></div> */}
                                                <div className={`block text-sm font-semibold text-pink-600`}>
                                                    {requiredValidation}
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    ref={addInputs}
                                                    type="text" 
                                                    name="lastName" 
                                                    id="lastName" 
                                                    
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                />
                                                <label 
                                                    htmlFor="lastName" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Prénom(s)
                                                </label>
                                                <div className={`block text-sm font-semibold text-pink-600`}>
                                                    {requiredValidation}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    ref={addInputs}
                                                    type="email" 
                                                    name="email" 
                                                    id="email" 
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'                
                                                />
                                                <label 
                                                    htmlFor="email" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Email
                                                </label>
                                                <div className="block text-sm font-semibold text-pink-600">
                                                    {requiredValidation}
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    ref={addInputs}
                                                    type="text" 
                                                    name="phoneNumber" 
                                                    id="phoneNumber" 
                                                    
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                    
                                                />
                                                <label 
                                                    htmlFor="phoneNumber" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Numéro de téléphone
                                                </label>
                                                <div className="block text-sm font-semibold text-pink-600">
                                                    {requiredValidation}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    ref={addInputs}
                                                    type='password' 
                                                    name="pwd" 
                                                    id="pwd"
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                    
                                                />
                                                <label 
                                                    htmlFor="pwd" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Mot de passe
                                                </label>
                                                <div className="block text-sm font-semibold text-pink-600">
                                                    {pwdValidation} {requiredValidation}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-1">
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    ref={addInputs}
                                                    type='password' 
                                                    name="verifPwd" 
                                                    id="verifPwd"
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                    
                                                />
                                                <label 
                                                    htmlFor="verifPwd" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Mot de passe à nouveau
                                                </label>
                                                <div className="block text-sm font-semibold text-pink-600">
                                                    {pwdValidation} {requiredValidation}
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>

                                <hr className='-mx-20' />

                                {/* Adresse */}
                                <div className="py-8">
                                    <div className="flex mb-4">
                                        <span className='flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500'>2</span>

                                        <span className='font-bold text-PrimaryBlue '> Adresse</span>
                                    </div>


                                    <div className="flex flex-wrap">
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    ref={addInputs}
                                                    type="text" 
                                                    name="streetNumber" 
                                                    id="streetNumber"
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                />
                                                <label 
                                                    htmlFor="streetNumber" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Numéro de Rue
                                                </label>
                                                <div className="">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    ref={addInputs}
                                                    type="text" 
                                                    name="commune" 
                                                    id="commune"
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                />
                                                <label 
                                                    htmlFor="commune" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Commune
                                                </label>
                                                <div className="block text-sm font-semibold text-pink-600">
                                                    {requiredValidation}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    ref={addInputs}
                                                    type="text" 
                                                    name="town" 
                                                    id="town"
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'
                                                />
                                                <label 
                                                    htmlFor="town" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Ville
                                                </label>
                                                <div className="block text-sm font-semibold text-pink-600">
                                                    {requiredValidation}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-1">
                                        
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    ref={addInputs}
                                                    type="text" 
                                                    name="country" 
                                                    id="country"
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'

                                                />
                                                <label 
                                                    htmlFor="country" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"
                                                >
                                                    Etat/Region
                                                </label>
                                                <div className="block text-sm font-semibold text-pink-600">
                                                    {requiredValidation}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 px-1">
                                            
                                            <div className="relative mt-1 mb-6">
                                                <input 
                                                    ref={addInputs}
                                                    type="text" 
                                                    name="zipCode" 
                                                    id="zipCode"
                                                    placeholder='Enter your input here' 
                                                    className='w-full px-2 py-2 border border-SecondaryGray shadow-sm rounded text-gray placeholder-transparent focus:outline-none focus:ring focus:ring-indigo-300 peer'

                                                />
                                                <label 
                                                    htmlFor="zipCode" 
                                                    className="absolute block bg-white left-6 -top-3 text-sm font-semibold text-gray peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-placeholder-shown:left-2 transition-all duration-200 peer-focus:-top-3 peer-focus:left-6 peer-focus:text-sm  peer-focus:text-indigo-700 peer-focus:text-semibold"

                                                >
                                                    Code Postal
                                                </label>
                                                <div className="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <hr className='-mx-20' />

                                {/* Choix de la formation */}

                                <div className="py-8">
                                    <div className="flex mb-4">
                                        <span className='flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500'>3</span>

                                        <span className='font-bold text-PrimaryBlue '> Choisir Votre Formation</span>
                                    </div>
                                    <div className="flex  flex-wrap">
                                        <div className="w-full">
                                            <label 
                                                htmlFor="formation" 
                                                className={`block text-sm font-semibold text-gray`}
                                            >
                                                Choisir une formation
                                            </label>
                                            <div className="mt-1 w-full">
                                                <select
                                                    ref={addInputs}
                                                    name="formation" 
                                                    id="formation"
                                                    className='appearance-none w-full border border-SecondaryGray px-4 py-2 rounded shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-300'
                                                >
                                                    <option value="">Faire une selection</option>
                                                    <option value="superviseur_qhse">Superviseur QHSE</option>
                                                    <option value="responsable_qhse">Responsable QHSE</option>
                                                    <option value="bns_si">BNS & SI</option>
                                                    <option value="logiciel_robot">Logiciel Robot</option>
                                                    <option value="production_petroliere">Production Pétrolière</option>
                                                    <option value="reservoir_petrolier">Reservoir Pétrolier</option>
                                                </select>
                                            </div>
                                            <div className="block text-sm font-semibold text-pink-600">
                                                {requiredValidation}
                                            </div>
                                        </div>
                                        <fieldset className='mt-4 flex items-center'>
                                            <legend 
                                                className={`block text-sm font-semibold text-gray mb-2`}
                                            >
                                                Type de Formation
                                            </legend>

                                            <div className="">
                                                <input 
                                                    ref={addInputs}
                                                    type="radio" 
                                                    name="typeOfFormation" 
                                                    value=""
                                                    id="online" 
                                                    className='peer/online'
                                                />
                                                <label htmlFor="online" className='peer-checked/online:text-indigo-500 px-1 text-ThirdlyGray font-bold'>En Ligne</label>

                                                <input 
                                                    ref={addInputs}
                                                    type="radio" 
                                                    name="typeOfFormation" 
                                                    id="face_to_face" 
                                                    value=""
                                                    className='peer/face_to_face' 
                                                />
                                                <label htmlFor="face_to_face" className='peer-checked/face_to_face:text-indigo-500 px-1 text-ThirdlyGray font-bold'>En Présentiel</label>
                                                
                                                <div className="block text-sm font-semibold text-pink-600">
                                                    {requiredValidation}
                                                </div>
                                                <div className="hidden peer-checked/online:block mt-3">Vous avez choisis la formation en ligne</div>
                                                <div className="hidden peer-checked/face_to_face:block mt-3">Vous avez choisis la formation en présentiel</div>
                                            </div>
                                        </fieldset>

                                    </div>
                                    
                                    <div className="mt-3">
                                        <label htmlFor="formation" className='block mb-1 text-sm font-semibold text-gray'>
                                            Commentaire
                                        </label>
                                        <textarea 
                                            ref={addInputs}
                                            name="comment" 
                                            id="comment"
                                            cols="55" 
                                            rows="5" 
                                            className='rounded border-SecondaryGray shadow-sm appearance-none px-4 py-2 focus:ring focus:ring-indigo-300' placeholder='Entrer ici toutes vos question et préocupations'
                                        >

                                        </textarea>
                                    </div>

                                </div>

                                <hr className='-mx-20' />

                                {/* Documents à fournir */}

                                
                                    <div className="py-8">
                                        <div className="flex mb-4">
                                            <span className='flex justify-center border rounded-full w-6 h-6 mr-3 border-blue-500 text-blue-500'>4</span>

                                            <span className='font-bold text-PrimaryBlue '> Documents à Fournire </span>
                                        </div>
                                        
                                        <div className="flex flex-wrap">
                                            <div className="w-1/2 px-1 ">
                                                
                                                <label 
                                                    htmlFor="cni" 
                                                    className="text-xs sm:text-sm font-semibold text-gray mb-1"
                                                >
                                                    
                                                    <div className="mt-1">

                                                        <span 
                                                            className={`block`}
                                                        >
                                                            Attestation d'Identité ou CNI
                                                        </span>
                                                        <input 
                                                            ref={addInputs}
                                                            type="file" 
                                                            name="cni" 
                                                            id="cni"
                                                            placeholder='Enter your input here' 
                                                            className='block w-full text-xs sm:text-sm  text-slate-500 sm:file:mr-4 sm:file:py-2 sm:file:px-4 file:rounded-full file:border-0 sm:file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'
                                                        />
                                                    </div>
                                                </label>
                                                <div className={`block text-sm text-center mt-1 font-semibold text-pink-600`}>
                                                    {requiredValidation}
                                                </div>
                                                
                                            </div>
                                            <div className="w-1/2 px-1">
                                                <label 
                                                    htmlFor="lastStudyReport" 
                                                    className="block text-xs sm:text-sm font-semibold text-gray mb-1"
                                                >
                                                    
                                                    <div className="mt-1">
                                                        <span className='block '>
                                                            Dernier Bulletin Scolaire
                                                        </span>
                                                        <input 
                                                            ref={addInputs}
                                                            type="file" 
                                                            name="lastStudyReport" 
                                                            id="lastStudyReport"
                                                            placeholder='Enter your input here' 
                                                            className='block w-full text-xs sm:text-sm  text-slate-500 sm:file:mr-4 sm:file:py-2 sm:file:px-4 file:rounded-full file:border-0 sm:file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'
                                                        />
                                                    </div>
                                                </label>
                                                <div className={`block text-sm text-center mt-1 font-semibold text-pink-600`}>
                                                    {requiredValidation}
                                                </div>
                                                
                                            </div>
                                                
                                                
                                        </div>

                                        
                                        
                                        
                                    
                                    </div>

                                <div className="text-center flex justify-center items-center gap-2">
                                    <Link  to={"/"} type="submit" className='py-2 px-4 bg-PrimaryBlue text-white rounded shadow-sm tracking-wider text-sm font-semibold hover:bg-transparent hover:shadow-2xl hover:text-PrimaryBlue transition duration-300'>Retour</Link>

                                    <button  type="submit" className='py-2 px-4 bg-PrimaryBlue text-white rounded shadow-sm tracking-wider text-sm font-semibold hover:bg-transparent hover:shadow-2xl hover:text-PrimaryBlue transition duration-300'> paiement</button>
                                </div>

                            </form>
                            
                        </div>
                    
                    </div>

                    
                    {/* Côté gauche */}

                    <div className="bg-PrimaryBlue hidden sm:block sm:w-1/3 text-white font-Poppins ">
                        {/* Intitulé */}
                        <div className="flex justify-between items-center p-6">
                            <div className="flex">
                                <img src="./ITS_&_DG.png" className='w-16 rounded-full' alt="" />
                            </div>
                            <div className="flex flex-col items-end text-OriginGold">
                                <h1 className='text-xl font-bold'>ITSchool GROUP</h1>
                                <p className='text-xs'>
                                    International Training School
                                </p>
                                
                            </div>
                            
                            
                        </div>
                        <div className="text-white flex items-center justify-end p-6 text-xs gap-2 font-thin absolute top-[90px] right-[160px]">
                            <p>
                                Agreed Number
                            </p>
                            <div className='w-[3px] h-[45px] bg-white'/> 
                            <div className="">
                                <p>61-298-16</p>
                                <p>B08136942015</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-8">
                            <div className="mt-10 p-5 flex flex-col items-center justify-center ">
                                <h1 className='text-[18px] font-semibold mb-8'>Nos Formations Populaires</h1>

                                <div className="mt-5 flex flex-col gap-6 ">
                                    <div className="flex items-center mb-3 gap-2">
                                        <div className="flex items-center">
                                            <i className="fa-sharp fa-solid fa-shield"></i>
                                        </div>
                                        <p className='text-sm'>Superviseur QHSE | 200.000 <sup>fr</sup> CFA </p>
                                        
                                    </div>
                                    <div className="flex items-center mb-3 gap-2">
                                        <div className="flex items-center">
                                        <i className="fa-solid fa-user-shield "></i>
                                        </div>
                                        <p className='text-sm'>Responsable QHSE | 300.000 <sup>fr</sup> CFA </p>
                                        
                                    </div>
                                    <div className="flex items-center mb-3 gap-2">
                                        <div className="flex items-center">
                                            <i className="fa-solid fa-fire"></i>
                                        </div>
                                        <p className='text-sm'>BNS & SI | 100.000 <sup>fr</sup> CFA </p>
                                        
                                    </div>
                                    <div className="flex items-center mb-3 gap-2">
                                        <div className="flex items-center">
                                        <i className="fa-brands fa-uncharted "></i>
                                        </div>
                                        <p className='text-sm'>Logiciel Robot | 150.000 <sup>fr</sup> CFA </p>
                                        
                                    </div>
                                    <div className="flex items-center mb-3 gap-2">
                                        <div className="flex items-center">
                                        <i className="fa-solid fa-oil-well"></i>
                                        </div>
                                        <p className='text-'>Prod. Pétrolière | 150.000 <sup>fr</sup> CFA </p>
                                        
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center">
                                        <i className="fa-sharp fa-solid fa-bottle-droplet"></i>
                                        </div>
                                        <p className='text-sm'>Réservoir Pétrolier | 150.000 <sup>fr</sup> CFA </p>
                                        
                                    </div>
                                </div>

                                {/* Amblème */}
                                <div className="mt-20">
                                    <h1 className='text-[18px] font-semibold'>Certificat Internationale</h1>
                                    
                                    <div className="mt-3">
                                        <p className='font-thin'>
                                            Herbergement pour les non résidents <br /> Cours du jours, du soirs & weekend
                                        </p>
                                        <h2 className='mt-2 text-OriginGold font-semibold'>Your success is our challenge</h2>
                                    </div>
                                </div>

                            </div>
                            
                        </div>

                        {/* Nous contacté */}
                        <div className="mt-20">
                            <h1 className='text-[18px] font-semibold mb-8 text-center'>Nos Contacts</h1>

                            <div className="flex items-center p-3">
                                <div className="text-OriginGold">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <p className='pl-2 font-medium'>Lieu: Cocody 2 Plateau Cité Sanon</p>
                            </div>

                            <div className="flex items-center p-3">
                                <div className="text-OriginGold">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <p className='pl-2 font-xs'>+225 07 773 147 81 / 07 790 745 47</p>
                            </div>

                            <div className="flex items-center p-3">
                                <div className="text-OriginGold">
                                    <i className="fa-brands fa-whatsapp fa-lg"></i>
                                </div>
                                <p className='pl-2 font-medium'>+225 07 773 147 81</p>
                            </div>

                            <div className="flex items-center p-3 transition ease-in-out delay-150 hover:scale-110 ">
                                <a href="">
                                    <span className="text-OriginGold"><i className="fa-brands fa-facebook fa-lg"></i></span>
                                    <span className='pl-2 font-medium'>ITSCHOOL côte d'Ivoire</span>
                                </a>
                            </div>

                            
                            <div className="transition ease-in-out delay-150 hover:scale-110 p-3">
                                <a href="flex items-center"className=''>
                                    <span className='text-OriginGold pr-2'><i className="fa-solid fa-envelope"></i></span>
                                    <span className='font-medium text-[12.5px]'>Internationaltrainingschoolc@gmail.com</span>
                                </a>
                            </div>

                        
                            <div className="transition ease-in-out delay-150 hover:scale-110 flex items-center p-3">
                                <a href="flex items-center">
                                    <span className="text-OriginGold"><i className="fa-brands fa-linkedin fa-lg"></i></span>
                                    <span className='pl-2 font-medium text-[12.5px]'>International Training School Côte d'Ivoire</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                
                
            </div>

    </>

  )
}

export default SignUp