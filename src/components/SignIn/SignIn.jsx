import React from 'react'

export const SignIn = () => {
  return (
    <div className='flex justify-between items-center h-screen container mx-auto gap-8'>
        {/* Coté Gauche */}
        <div className="w-1/2 bg-black">
            <h1 className='text-white'>Gauche</h1>
        </div>

        {/* Coté Droit */}
        <div className="w-1/2  border border-slate-200 rounded">
            <div className="px-2">
                <h1 className='text-3xl text-PrimaryBlue py-6 font-bold'>Connexion</h1>

                <form action="" method="post" className='py-6'>
                    <div className="w-full px-1">
                        
                        <div className="relative mt-1 mb-6">
                            <input 
                                // ref={addInputs}
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
                                {/* {requiredValidation} */}
                            </div>
                            
                        </div>
                    </div>

                    <div className="relative mt-1 mb-6">
                        <input 
                            // ref={addInputs}
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
                            {/* {pwdValidation} {requiredValidation} */}
                        </div>
                    </div>

                    <div className="text-center">
                        <button   type="submit" className='py-2 px-4 bg-PrimaryBlue text-white rounded shadow-sm tracking-wider text-sm font-semibold hover:bg-transparent hover:shadow-2xl hover:text-PrimaryBlue transition duration-300'>Connexion</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
