import React from 'react'

const PelangarList = (props) => {
    const {data} = props;
  return (
    <div>
        <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
        {
            !data ? (<li>tidak ada data pelangar</li>)
            :
            (data.map(e => (
                <li key={e.noKtp}>
                    {e.noKtp}
                </li>
                )) )
        }
        </ul>
    </div>
  )
}

export default PelangarList