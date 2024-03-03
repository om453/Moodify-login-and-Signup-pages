import {Link} from 'react-router-dom';

export default function Header({ heading,paragraph,linkName,linkUrl="#" }){
    return(
        <div className="mb-10">
            
            <div className="flex justify-center">
                <h1 className=' text-3xl font-bold text-purple-600'>Moodify</h1>
            </div>

            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>

            <p className="mt-2 text-center text-sm text-gray-600 ">
            {paragraph} {' '}
            
            <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}