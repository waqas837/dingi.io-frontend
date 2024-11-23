"use client";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { apiUrl } from "../../../../../lib/api";

const LineContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Fetch all contacts
  const fetchContacts = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/contacts`);
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      toast.error("Failed to fetch contacts.");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const method = editingContact ? "PUT" : "POST";
    const url = editingContact
      ? `${apiUrl}/api/contacts/${editingContact.id}`
      : `${apiUrl}/api/contacts`;

    try {
      const response = await fetch(url, {
        method,
        headers: {
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
    } catch (error) {
      toast.error("An error occurred while creating the contact.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;

    try {
      const response = await fetch(`${apiUrl}/api/contacts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setContacts((prev) => prev.filter((contact) => contact.id !== id));
        toast.success("Contact deleted successfully!");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to delete contact.");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the contact.");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div style={styles.container}>
      <Toaster />
      <h1 style={styles.heading}>Line Contacts</h1>

      {/* Create Contact Form */}
      <div style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          style={styles.input}
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button style={styles.button} onClick={createContact}>
          Create Contact
        </button>
      </div>

      {/* Contacts List */}
      <ul style={styles.list}>
        {contacts.map((contact) => (
          <li key={contact.id} style={styles.listItem}>
            <div>
              <strong>{contact.name}</strong> - {contact.phone_number}
            </div>
            <button
              style={styles.deleteButton}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// CSS Styling
const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
  deleteButton: {
    padding: "5px 10px",
    fontSize: "14px",
    color: "#fff",
    backgroundColor: "#dc3545",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default LineContacts;
