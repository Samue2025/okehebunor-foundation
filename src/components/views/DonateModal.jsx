"use client";

import React, { useState, useEffect } from "react";
import { RiCloseLargeLine } from "react-icons/ri";

// NGN Tab Content Component
const NGNContent = () => {
  // Replace with actual NGN account details
  const accountDetails = {
    bank: "United Bank Of Africe, Nigeria",
    accountNumber: "1028277898",
    accountName: "The Samuel Sunday Okehebunor Foundation",
  };
  return (
    <div className="bg-white p-8 rounded-2xl  border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Nigerian Naira (NGN) Account Details</h3>
      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-600">Bank Name</p>
          <p className="font-medium">{accountDetails.bank}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Account Number</p>
          <p className="font-medium">{accountDetails.accountNumber}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Account Name</p>
          <p className="font-medium">{accountDetails.accountName}</p>
        </div>
       
      </div>
    </div>
  );
};

// USD Tab Content Component
const USDContent = () => {
  const intermediaryBank = {
    name: "Citibank New York, United States",
    swiftCode: "CITIUS33",
    routingNumber: "021000089",
    accountNumber: "36320321",
  };

  const beneficiaryBank = {
    name: "United Bank for Africa Plc (UBA), Nigeria",
    swiftCode: "UNAFNGLA",
    branch: "171 Nnebisi Road, Asaba, Delta State",
  };

  const beneficiary = {
    accountNumber: "3004822458",
    accountName: "The Samuel Sunday Okehebunor Foundation",
    address: "3A Off Dennis Osadebe Way, Asaba, Delta State, Nigeria",
  };

  return (
    <div className="bg-white p-8 rounded-2xl  border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-6">US Dollar (USD) Wire Transfer Instructions</h3>

      <div className="grid grid-cols-1 gap-6">
        {/* Beneficiary Bank */}
        <div className="space-y-3">
          <h4 className="text-base font-semibold text-gray-700 border-b border-t pb-1 border-gray-200">Beneficiary Bank</h4>
          <div className="grid grid-cols-1 gap-1">
            <div>
              <p className="text-sm text-gray-500">Bank Name</p>
              <p className="text-base font-medium text-gray-800">{beneficiaryBank.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">SWIFT Code</p>
              <p className="text-base font-medium text-gray-800">{beneficiaryBank.swiftCode}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Branch</p>
              <p className="text-base font-medium text-gray-800">{beneficiaryBank.branch}</p>
            </div>
          </div>
        </div>

        {/* Intermediary Bank */}
        <div className="space-y-3">
          <h4 className="text-base font-semibold text-gray-700 border-t border-b pb-1 border-gray-200">Intermediary Bank</h4>
          <div className="grid grid-cols-1 gap-1">
            <div>
              <p className="text-sm text-gray-500">Bank Name</p>
              <p className="text-base font-medium text-gray-800">{intermediaryBank.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">SWIFT Code</p>
              <p className="text-base font-medium text-gray-800">{intermediaryBank.swiftCode}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Sort Code</p>
              <p className="text-base font-medium text-gray-800">{intermediaryBank.sortCode}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Account Number</p>
              <p className="text-base font-medium text-gray-800">{intermediaryBank.accountNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">IBAN</p>
              <p className="text-base font-medium text-gray-800">{intermediaryBank.iban}</p>
            </div>
          </div>
        </div>

        {/* Beneficiary Info */}
        <div className="space-y-3">
          <h4 className="text-base font-semibold text-gray-700 border-b border-t pb-1 border-gray-200">Final Beneficiary Details</h4>
          <div className="grid grid-cols-1 gap-1">
            <div>
              <p className="text-sm text-gray-500">Account Name</p>
              <p className="text-base font-medium text-gray-800">{beneficiary.accountName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Account Number</p>
              <p className="text-base font-medium text-gray-800">{beneficiary.accountNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-base font-medium text-gray-800">{beneficiary.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// GBP Tab Content Component
const GBPContent = () => {
  const intermediaryBank = {
    name: "Citibank London, United Kingdom",
    swiftCode: "CITIGB2L",
    sortCode: "185008",
    accountNumber: "0013664090",
    iban: "GB07CITI18500813664090",
  };

  const beneficiaryBank = {
    name: "United Bank for Africa Plc (UBA), Nigeria",
    swiftCode: "UNAFNGLA",
    branch: "171 Nnebisi Road, Asaba, Delta State",
  };

  const beneficiary = {
    accountNumber: "3004822513",
    accountName: "The Samuel Sunday Okehebunor Foundation",
    address: "3A Off Dennis Osadebe Way, Asaba, Delta State, Nigeria",
  };

  return (
    <div className="bg-white p-8 rounded-2xl  border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-6">British Pound (GBP) Wire Transfer Instructions</h3>

      <div className="grid grid-cols-1 gap-6">
        {/* Beneficiary Bank */}
        <div className="space-y-3">
          <h4 className="text-base font-semibold text-gray-700 border-b border-t pb-1 border-gray-200">Beneficiary Bank</h4>
          <div className="grid grid-cols-1 gap-1">
            <div>
              <p className="text-sm text-gray-500">Bank Name</p>
              <p className="text-base font-medium text-gray-800">{beneficiaryBank.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">SWIFT Code</p>
              <p className="text-base font-medium text-gray-800">{beneficiaryBank.swiftCode}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Branch</p>
              <p className="text-base font-medium text-gray-800">{beneficiaryBank.branch}</p>
            </div>
          </div>
        </div>

        {/* Intermediary Bank */}
        <div className="space-y-3">
          <h4 className="text-base font-semibold text-gray-700 border-t border-b pb-1 border-gray-200">Intermediary Bank</h4>
          <div className="grid grid-cols-1 gap-1">
            <div>
              <p className="text-sm text-gray-500">Bank Name</p>
              <p className="text-base font-medium text-gray-800">{intermediaryBank.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">SWIFT Code</p>
              <p className="text-base font-medium text-gray-800">{intermediaryBank.swiftCode}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Sort Code</p>
              <p className="text-base font-medium text-gray-800">{intermediaryBank.sortCode}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Account Number</p>
              <p className="text-base font-medium text-gray-800">{intermediaryBank.accountNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">IBAN</p>
              <p className="text-base font-medium text-gray-800">{intermediaryBank.iban}</p>
            </div>
          </div>
        </div>

        {/* Beneficiary Info */}
        <div className="space-y-3">
          <h4 className="text-base font-semibold text-gray-700 border-b border-t pb-1 border-gray-200">Final Beneficiary Details</h4>
          <div className="grid grid-cols-1 gap-1">
            <div>
              <p className="text-sm text-gray-500">Account Name</p>
              <p className="text-base font-medium text-gray-800">{beneficiary.accountName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Account Number</p>
              <p className="text-base font-medium text-gray-800">{beneficiary.accountNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Address</p>
              <p className="text-base font-medium text-gray-800">{beneficiary.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DonateModal = ({ onClose, showModal }) => {
  const [activeTab, setActiveTab] = useState("NGN");

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  if (!showModal) return null;

  const renderTabContent = () => {
    switch (activeTab) {
      case "NGN":
        return <NGNContent />;
      case "USD":
        return <USDContent />;
      case "GBP":
        return <GBPContent />;
      default:
        return <NGNContent />;
    }
  };

  return (
    <section
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-[100] ticketModal-overlay px-4 sm:px-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col items-center rounded-2xl bg-white shadow w-full max-w-[600px] max-h-[600px] overflow-y-auto p-4 sm:p-6 lg:p-8 gap-6"
      >
        <div className="self-end flex justify-end items-end">
          <button onClick={onClose} aria-label="Close Modal" className="p-2">
            <RiCloseLargeLine />
          </button>
        </div>

        <div className="w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Donation Details</h2>

          {/* Tabs */}
          <div className="flex w-full items-center justify-center gap-6 mb-6">
            {["NGN", "USD", "GBP"].map((currency) => (
              <button
                key={currency}
                onClick={() => setActiveTab(currency)}
                className={`px-4 py-2.5 rounded bg-gray-400 text-white text-sm sm:text-base font-medium w-full cursor-pointer transition-all duration-300 ease-in-out hover:transform hover:scale-[1.02] ${
                  activeTab === currency ? "bg-green" : ""
                }`}
              >
                {currency}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default DonateModal;
