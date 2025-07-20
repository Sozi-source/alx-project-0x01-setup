import { UserModalProps,UserData} from "@/interfaces";
import React, {useState} from "react";


const UserModal: React.FC<UserModalProps> =({onClose, onSubmit, user})=>{
    
    const[formData, setFormData]=useState<UserData>(
        user || {
      id: 0,
      name: "",
      username: "",
      email: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: { lat: "", lng: "" },
      },
      phone: "",
      website: "",
      company: { name: "", catchPhrase: "", bs: "" },
    }
    )

    const handleChange = (e:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
            const {name, value}= e.target;


            if (name.startsWith("address.")) {
            const key = name.split(".")[1];
            setFormData({
                ...formData,
                address: { ...formData.address, [key]: value },
            });
            } else if (name.startsWith("company.")) {
            const key = name.split(".")[1];
            setFormData({
                ...formData,
                company: { ...formData.company, [key]: value },
            });
            } else {
            setFormData({ ...formData, [name]: value });
            }
        };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

return(

    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          {user ? "Edit User" : "Add User"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Basic Info */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            value={formData.website}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />

          {/* Address */}
          <h3 className="text-md font-medium mt-4">Address</h3>
          <input
            type="text"
            name="address.street"
            placeholder="Street"
            value={formData.address.street}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="address.suite"
            placeholder="Suite"
            value={formData.address.suite}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="address.city"
            placeholder="City"
            value={formData.address.city}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="address.zipcode"
            placeholder="Zipcode"
            value={formData.address.zipcode}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />

          {/* Company */}
          <h3 className="text-md font-medium mt-4">Company</h3>
          <input
            type="text"
            name="company.name"
            placeholder="Company Name"
            value={formData.company.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="company.catchPhrase"
            placeholder="Catch Phrase"
            value={formData.company.catchPhrase}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="company.bs"
            placeholder="BS"
            value={formData.company.bs}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />

          {/* Buttons */}
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-700 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;

