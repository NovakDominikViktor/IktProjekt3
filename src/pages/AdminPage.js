import React from 'react';
import AssignRoleForm from '../components/AssignRoleForm';

const AdminPage = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Admin Page</h2>
                            <AssignRoleForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
