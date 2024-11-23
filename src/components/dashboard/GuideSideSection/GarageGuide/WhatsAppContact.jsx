"use client";
 import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { apiUrl } from "../../../../../lib/api";

const styles = {
  container: {
    maxWidth: "600px",
    margin: "30px auto",
    padding: "30px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Roboto', sans-serif",
  },
  title: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#4a4a4a",
    textAlign: "center",
  },
  formGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "8px",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#333",
    boxSizing: "border-box",
    outline: "none",
    transition: "border-color 0.3s",
  },
  inputFocus: {
    borderColor: "#4a90e2",
  },
  saveButton: {
    padding: "12px 18px",
    backgroundColor: "#4a90e2",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    width: "100%",
    transition: "background-color 0.3s",
    marginTop: "10px",
  },
  saveButtonHover: {
    backgroundColor: "#3b79c1",
  },
  showFormButton: {
    padding: "12px 18px",
    backgroundColor: "#4a90e2",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    width: "100%",
    marginBottom: "20px",
    transition: "background-color 0.3s",
  },
  contactCard: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contactDetails: {
    fontSize: "16px",
    color: "#333",
  },
  cardButton: {
    marginLeft: "10px",
    padding: "8px 12px",
    backgroundColor: "#4a90e2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
  },
  cardButtonHover: {
    backgroundColor: "#3b79c1",
  },
};

const WhatsappContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    name: "WhatsApp Contact",
    phoneNumber: "",
  });
  const [editingContact, setEditingContact] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const API_URL = "http://localhost:4000/api/contacts/whatsapp"; // Update this with your backend URL

  // Fetch all contacts
  const fetchContacts = async () => {
    try {
      const adminToken = localStorage.getItem("adminToken");
      const response = await fetch(
        `${apiUrl}/api/contacts/whatsapp`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${adminToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch contacts.");
      }
      setContacts(data);
    } catch (error) {
      toast.error(error.message || "Error fetching contacts.");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editingContact ? "PUT" : "POST";
    const url = editingContact
      ? `${apiUrl}/api/contacts/whatsapp/${editingContact.id}`
      : `${apiUrl}/api/contacts/whatsapp`;
    try {
      const adminToken = localStorage.getItem("adminToken");

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${adminToken}`,
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, phoneNumber }),
      });

      if (response.ok) {
        const result = await response.json();
        setContacts((prev) => [...prev, result.contact]);
        toast.success("Contact created successfully!");
        setName("");
        setPhoneNumber("");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to create contact.");
      }

      toast.success(data.message);
      setForm({ name: "WhatsApp Contact", phoneNumber: "" });
      setEditingContact(null);
      setShowForm(false);
      fetchContacts();
    } catch (error) {
      toast.error("An error occurred while creating the contact.");
    }
  };

  // Delete a contact
  const deleteContact = async (id) => {
    try {
      const adminToken = localStorage.getItem("adminToken");

      const response = await fetch(
        `${apiUrl}/api/contacts/whatsapp/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${adminToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setContacts((prev) => prev.filter((contact) => contact.id !== id));
        toast.success("Contact deleted successfully!");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to delete contact.");
      }

      toast.success(data.message);
      setShowForm(false);
      fetchContacts();
    } catch (error) {
      toast.error("An error occurred while deleting the contact.");
    }
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
    setForm(contact);
    setShowForm(true);
  };

  const handleAddNew = () => {
    setEditingContact(null);
    setForm({ name: "WhatsApp Contact", phoneNumber: "" });
    setShowForm(true);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div style={styles.container}>
      {showForm ? (
        <>
          <h2 style={styles.title}>
            {editingContact
              ? "Edit WhatsApp Contact"
              : "Add New WhatsApp Contact"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Contact Type</label>
              <select
                style={styles.input}
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              >
                <option value="WhatsApp Contact">WhatsApp Contact</option>
                <option value="Line Contact">Line Contact</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Phone Number</label>
              <input
                style={styles.input}
                type="text"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" style={styles.saveButton}>
              {editingContact ? "Update Contact" : "Save Contact"}
            </button>
          </form>
        </>
      ) : (
        <button onClick={handleAddNew} style={styles.showFormButton}>
          Add New Contact
        </button>
      )}

      <h2 style={styles.title}>Contacts</h2>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <div key={contact.id} style={styles.contactCard}>
            <div style={styles.contactDetails}>
              <strong>{contact.name}</strong>
              <br />
              {contact.phone_number}
            </div>
            <div>
              <button
                onClick={() => handleEdit(contact)}
                style={styles.cardButton}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(contact.id)}
                style={styles.cardButton}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", color: "#666" }}>
          No contacts found. Please add one.
        </p>
      )}
    </div>
  );
};

 
export default WhatsappContacts;
