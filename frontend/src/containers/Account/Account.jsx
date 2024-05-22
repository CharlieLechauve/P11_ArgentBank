import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadProfile, editUsername } from "../../redux/api";
import { updateUsername } from "../../redux/authSlice" ;


function Account () {

    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
  
    //Edition menu open/close 
    const [isUserEditing, setIsUserEditing] = useState (false);
  
    const [newUsername, setNewUsername] = useState(user.userName);
  
  
    useEffect(() => {
      if (token) {
        loadProfile(dispatch, token);
      }
      setNewUsername(user.userName);
    }, [dispatch, token, user.userName]);
  
    const saveNewUsername = async () => {
      const updateUserAttributes = await editUsername(token, newUsername, user);
  
      if (updateUserAttributes) {
        dispatch(updateUsername(updateUserAttributes));
        setIsUserEditing(false);
      }
    };

    return (

    <>

      {isUserEditing ? (

        <div className="interface-editname">
            <div>
                <h1>Edit user info</h1>
                <form>
                    <div className="input-wrapper">
                    <label htmlFor="username"> User name : </label>
                    <input
                        type="text"
                        id="username"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                    />
                    </div>

                    <div className="input-wrapper">
                    <label htmlFor="firstName">First name : </label>
                    <input type="text" id="firstName" value={user?.firstName} className="unclickable" />
                    </div>

                    <div className="input-wrapper">
                    <label htmlFor="lastName">Last name : </label>
                    <input type="text" id="lastName" value={user?.lastName} className="unclickable" />
                    </div>
                </form>

                <button type="submit" className="interface-button" onClick={saveNewUsername}>
                    Save
                </button>
                <button type="button" className="interface-button" onClick={() => setIsUserEditing(false)}>
                    Cancel
                </button>
            </div>
        </div>

      ) : (

        <div className="interface">
          <h1>
            Welcome back
            <br />
            {user?.firstName} {user?.lastName}
            </h1>
            <button className="edit-button" onClick={() => setIsUserEditing(true)}>Edit Name</button>
        </div>
    
      )}

    </>

    );
}

export default Account ;