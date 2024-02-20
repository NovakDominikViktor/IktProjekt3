import React from 'react';

const AssignRoleForm = () => {
    return (
        <div>
            <h3 className="mb-4">Assign Role</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="role" className="form-label">Role:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="role"
                        placeholder="Enter role"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Assign Role</button>
            </form>
        </div>
    );
};

export default AssignRoleForm;
