import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trash, Upload, ArrowRight } from 'lucide-react';

const GalleryNewsPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' | 'news' | 'inquiries'
  const [galleryItems, setGalleryItems] = useState([]);
  const [newsItems, setNewsItems] = useState([]);
  const [inquiryItems, setInquiryItems] = useState([]);

  // Form states
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [summary, setSummary] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'WomenEmpowerment-Admin' && password === 'WEAEP@12042026#357') {
      setIsAuthenticated(true);
      setShowLogin(false);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const fetchData = async () => {
    try {
      const gRes = await fetch('https://weaec-backend.onrender.com/api/gallery');
      const gData = await gRes.json();
      setGalleryItems(gData);

      const nRes = await fetch('https://weaec-backend.onrender.com/api/news');
      const nData = await nRes.json();
      setNewsItems(nData);

      const iRes = await fetch('https://weaec-backend.onrender.com/api/inquiry');
      if (iRes.ok) {
        const iData = await iRes.json();
        setInquiryItems(iData);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert('Please select a file');

    const formData = new FormData();
    formData.append('image', file);
    formData.append('title', title);
    formData.append('date', date);
    if (activeTab === 'gallery') {
      formData.append('description', description);
    }
    if (activeTab === 'news') {
      formData.append('summary', summary);
    }

    try {
      const res = await fetch(`https://weaec-backend.onrender.com/api/${activeTab}`, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert(`${activeTab === 'gallery' ? 'Image' : 'News'} uploaded successfully!`);
        setFile(null);
        setTitle('');
        setDate('');
        setDescription('');
        setSummary('');
        fetchData(); // Refresh list
      } else {
        alert('Upload failed');
      }
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    }
  };

  const handleDelete = async (id, type) => {
    if (!window.confirm("Are you sure you want to delete this?")) return;

    try {
      await fetch(`https://weaec-backend.onrender.com/api/${type}/${id}`, { method: 'DELETE' });
      fetchData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-primary">Admin Panel</h2>
        {isAuthenticated && (
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg font-bold transition-colors"
          >
            Logout
          </button>
        )}
      </div>

      {!isAuthenticated ? (
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 max-w-md mx-auto mb-10">
          <h3 className="text-xl font-bold text-center text-primary mb-4">Admin Access</h3>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input type="text" required value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white py-2 rounded-lg font-bold transition-colors">Login</button>
          </form>
        </motion.div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Upload Form Section */}
          <div className="bg-white p-6 rounded-2xl shadow border border-primary/20 flex-1 lg:max-w-md h-fit lg:sticky lg:top-24">
            <div className="flex gap-4 mb-6">
              <button
                className={`flex-1 py-2 font-bold rounded-lg ${activeTab === 'gallery' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                onClick={() => setActiveTab('gallery')}
              >
                Gallery
              </button>
              <button
                className={`flex-1 py-2 font-bold rounded-lg ${activeTab === 'news' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                onClick={() => setActiveTab('news')}
              >
                News
              </button>
              <button
                className={`flex-1 py-2 font-bold rounded-lg ${activeTab === 'inquiries' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}
                onClick={() => setActiveTab('inquiries')}
              >
                Inquiries
              </button>
            </div>

            {activeTab !== 'inquiries' ? (
              <>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Upload {activeTab === 'gallery' ? 'Image' : 'News'}</h3>
                <form onSubmit={handleUpload} className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Title</label>
                    <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-primary/50" placeholder="Enter title" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Date</label>
                    <input type="text" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-primary/50" placeholder="e.g. April 15, 2026" />
                  </div>

                  {activeTab === 'gallery' && (
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Description</label>
                      <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-primary/50 h-24" placeholder="Image description..."></textarea>
                    </div>
                  )}

                  {activeTab === 'news' && (
                    <div>
                      <label className="block text-sm text-gray-700 mb-1">Summary</label>
                      <textarea required value={summary} onChange={(e) => setSummary(e.target.value)} className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-primary/50 h-24" placeholder="News summary..."></textarea>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Upload File</label>
                    <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg flex flex-col items-center cursor-pointer hover:bg-gray-50 bg-white">
                      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="text-sm text-gray-500 w-full" required />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2">
                    <Upload size={20} />
                    Publish
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <p className="text-gray-500 mb-4">Review and manage received user inquiries directly from this portal.</p>
                <div className="bg-primary/10 text-primary p-4 rounded-xl font-bold">
                  {inquiryItems.length} Inquiries Total
                </div>
              </div>
            )}
          </div>

          {/* Display Section */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {activeTab === 'inquiries' ? (
                inquiryItems.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow p-5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 py-1 px-3 bg-primary text-white text-xs font-bold rounded-bl-lg">
                      {item.service}
                    </div>
                    <h4 className="font-bold text-lg text-gray-800 border-b border-gray-100 pb-2 mb-2 pr-20">{item.name}</h4>
                    <p className="text-sm font-bold text-gray-700">{item.email}</p>
                    <p className="text-xs text-gray-500 mb-3">{item.phone} • {new Date(item.createdAt).toLocaleDateString()}</p>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs font-bold text-primary mb-1">Plan: {item.plan}</p>
                      <p className="text-sm text-gray-600 line-clamp-4">{item.message}</p>
                    </div>
                  </div>
                ))
              ) : (
                (activeTab === 'gallery' ? galleryItems : newsItems).map(item => (
                  <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow">
                    <img src={item.src || item.image} alt={item.title} className="w-full h-56 object-cover" />
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-lg text-gray-800 line-clamp-2">{item.title}</h4>
                      </div>
                      <p className="text-xs font-bold text-primary mb-3">{item.date}</p>

                      {item.description && <p className="text-sm text-gray-600 mt-2">{item.description}</p>}
                      {item.summary && <p className="text-sm text-gray-600 mt-2 line-clamp-4">{item.summary}</p>}

                      <div className="mt-auto pt-4 flex justify-end gap-2 border-t border-gray-50 pt-4">
                        <button onClick={() => handleDelete(item.id, activeTab)} className="text-red-500 hover:text-white hover:bg-red-500 bg-red-50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 text-sm font-bold">
                          <Trash size={16} /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}

              {activeTab === 'inquiries' && inquiryItems.length === 0 && (
                <div className="col-span-full py-12 text-center bg-white rounded-xl border border-gray-100 border-dashed">
                  <p className="text-gray-500 text-lg">No inquiries received yet.</p>
                </div>
              )}
              {activeTab !== 'inquiries' && (activeTab === 'gallery' ? galleryItems : newsItems).length === 0 && (
                <div className="col-span-full py-12 text-center bg-white rounded-xl border border-gray-100 border-dashed">
                  <p className="text-gray-500 text-lg">No {activeTab} items found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryNewsPage;
