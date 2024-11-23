"use client"
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { apiUrl } from "../../../../../lib/api";

const SimPlanManager = () => {
  const [plans, setPlans] = useState([]);
  const [form, setForm] = useState({
    planName: "",
    price: "",
    dataAllowance: "",
    effectiveDate: "",
  });
  const [editingPlan, setEditingPlan] = useState(null);
  const [error, setError] = useState(null);

  // Safely get admin token with error handling
  const adminToken =
    typeof window !== "undefined" ? localStorage.getItem("adminToken") : null;

  const fetchPlans = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/sim-plans/all`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch plans");
      }

      const data = await response.json();
      setPlans(data.plans || []);
      setError(null);
    } catch (error) {
      console.error("Error fetching plans:", error);
      setError(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validate form data
    if (
      !form.planName ||
      !form.price ||
      !form.dataAllowance ||
      !form.effectiveDate
    ) {
      setError("All fields are required");
      return;
    }

    try {
      const url = editingPlan
        ? `${apiUrl}/api/sim-plans/update/${editingPlan.id}`
        : `${apiUrl}/api/sim-plans/create`;

      const method = editingPlan ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken}`,
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to save the plan.");
      }

      // Reset form and fetch updated plans
      setForm({
        planName: "",
        price: "",
        dataAllowance: "",
        effectiveDate: "",
      });
      setEditingPlan(null);
      fetchPlans();
    } catch (error) {
      console.error("Error saving plan:", error);
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this plan?")) return;

    try {
      const response = await fetch(`${apiUrl}/api/sim-plans/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete the plan.");
      }

      fetchPlans();
    } catch (error) {
      console.error("Error deleting plan:", error);
      setError(error.message);
    }
  };

  const handleEdit = (plan) => {
    setEditingPlan(plan);
    setForm(plan);
  };

  useEffect(() => {
    if (adminToken) {
      fetchPlans();
    }
  }, [adminToken]);

  return (
    <div className="sim-plan-container">
      <div className="form-section">
        <h2 className="section-title">
          {editingPlan ? "Edit SIM Plan" : "Create SIM Plan"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Plan Name</label>
            <input
              type="text"
              name="planName"
              value={form.planName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Price ($)</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />
          </div>
          <div className="form-group">
            <label>Data Allowance (GB)</label>
            <input
              type="number"
              name="dataAllowance"
              value={form.dataAllowance}
              onChange={handleChange}
              min="0"
              required
            />
          </div>
          <div className="form-group">
            <label>Effective Date</label>
            <input
              type="date"
              name="effectiveDate"
              value={form.effectiveDate}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="save-button">
            {editingPlan ? "Update Plan" : "Save Plan"}
          </button>
        </form>
      </div>

      <div className="plans-section">
        <h2 className="section-title">SIM Plans</h2>
        {plans.length === 0 ? (
          <p className="no-plans">No plans available</p>
        ) : (
          <ul className="plans-list">
            {plans &&
              plans.map((plan) => (
                <li key={plan.id} className="plan-item">
                  <div className="plan-details">
                    <h3>{plan.plan_name}</h3>
                    <p>
                      ${plan.price} | {plan.data_allowance}GB
                    </p>
                    <small>
                      Effective:{" "}
                      {new Date(plan.effective_date).toLocaleString()}
                    </small>
                  </div>
                  <div className="plan-actions">
                    <button
                      onClick={() => handleEdit(plan)}
                      className="edit-button"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(plan.id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        )}
      </div>

      <style jsx>{`
        .sim-plan-container {
          max-width: 600px;
          margin: 2rem auto;
          padding: 2rem;
          background-color: #f9f9f9;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }

        .section-title {
          text-align: center;
          color: #333;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: #555;
          font-weight: 500;
        }

        .form-group input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 0.95rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus {
          outline: none;
          border-color: #4a90e2;
        }

        .save-button {
          width: 100%;
          padding: 0.75rem;
          background-color: #4a90e2;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }

        .save-button:hover {
          background-color: #357abd;
        }

        .plans-list {
          list-style-type: none;
          padding: 0;
        }

        .plan-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: white;
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        }

        .plan-details h3 {
          margin: 0 0 0.5rem 0;
          color: #333;
        }

        .plan-details p {
          margin: 0 0 0.25rem 0;
          color: #666;
        }

        .plan-details small {
          color: #888;
        }

        .plan-actions button {
          margin-left: 0.5rem;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .edit-button {
          background-color: #4caf50;
          color: white;
        }

        .delete-button {
          background-color: #f44336;
          color: white;
        }

        .error-message {
          background-color: #ffdddd;
          color: #f44336;
          padding: 0.75rem;
          border-radius: 6px;
          margin-bottom: 1rem;
          text-align: center;
        }

        .no-plans {
          text-align: center;
          color: #888;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

export default SimPlanManager;
