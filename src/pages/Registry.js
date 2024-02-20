import React from 'react';
import RegistryForm from '../components/RegistryForm';

const Registry = () => {
    const handleSubmit = (userData) => {
        // Handle form submission logic here
        console.log('Form data:', userData);
    };

    return (
        <div>
            <RegistryForm onSubmit={handleSubmit} />
        </div>
    );
};

export default Registry;
