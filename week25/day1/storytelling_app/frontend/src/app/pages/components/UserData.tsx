import React from 'react'

export default function UserData() {
  return (
    <>
        <div className="card card-side bg-base-100 shadow-sm w-fit h-fit m-4 flex flex-col gap-2">
            <figure className="w-48 m-4">
                <img
                className="object-cover h-48"
                src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
                alt="User photo" />
            </figure>
            <div className="card-body flex flex-col gap-2">
                <h2 className="card-title text-left">John Joe</h2>
                <p className='text-left'>On platform since 30 jan 2020</p>
                <p className='text-left'>own stories: 20</p>
                <p className='text-left'>contributed: 4</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Change user</button>
                </div>
            </div>
        </div>
    </>
  )
}
