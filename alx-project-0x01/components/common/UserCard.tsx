import { UserProps} from "@/interfaces"

const UserCard: React.FC<{user: UserProps}>=({user})=>{

    return(
        <div>
        <h3>{user.name} </h3>
        <p>{user.username}</p>
        <p>{user.email}</p>
        
        <div>
            <h4>Address</h4>
            <p>{user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
            <p> <small>Geo: {user.address.geo.lat}, {user.address.geo.lng} </small></p>
        </div>

        <div>
            <h4>Company</h4>
            <p><strong>{user.company.name} </strong> </p>
            <p>{user.company.catchPhrase} </p>
            <p>{user.company.bs} </p>
        </div> 
    </div>
    )



}
export default UserCard;