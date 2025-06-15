import React, { useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowLeft,
  Send,
  Search,
  ChevronRight,
  X,
} from "lucide-react";
import Navbar from "../components/Navbar";
import vancore from "../assets/vancore-white.svg";

const HelpSupport = () => {
  const [currentScreen, setCurrentScreen] = useState("contact");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "agent",
      name: "Duchess",
      role: "Vancore Agent",
      message:
        "Hi there, This is Duchess from Vancore. I am here to answer your questions. How can I be of assistance today?",
      avatar: "👩🏾‍💼",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const faqItems = [
    "How do I contact Vancore",
    "My bank details are not displaying",
    "Is my account safe?",
    "What are the features?",
    "Do I have access to the team?",
    "What does Vancore do with my details?",
    "Is my BVN safe with Vancore?",
    "How do I use the products feature?",
    "Can I have two accounts?",
    "Can I re-use a coupon code?",
    "Are customers paying me directly?",
    "What are Vancore's payment methods",
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        sender: "user",
        message: newMessage,
      };
      setChatMessages([...chatMessages, userMessage]);
      setNewMessage("");
    }
  };

  const ContactScreen = () => (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">
      <div className="max-w-full mx-auto">
        <div className=" mb-12">
          <h2 className="text-2xl font-semibold text-[#242424] mb-2">
            Help & Support
          </h2>
          <p className="text-sm  text-[#666667] max-w-2xl">
            We are available 24/7 with any questions. Chat with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-2 lg:gap-5 mb-8">
          <div className="bg-white rounded-3xl p-6 pt-10 text-center border border-[#EBEBEB] ">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-10 h-10 lg:w-12 lg:h-12 text-[#5704E3]" />
            </div>
            <h3 className="text-lg lg:text-2xl font-semibold text-gray-900 mb-3">
              Phone number
            </h3>
            <p className="text-gray-600 mb-4 w-4/5 mx-auto text-base">
              Reach us on any of these phone numbers
            </p>
            <div className="space-y-4">
              <a
                href="tel:+2348098765566"
                className="block text-[#5704E3] font-medium hover:underline text-base"
              >
                +234 8098765566
              </a>
              <a
                href="tel:+2348098765566"
                className="block text-[#5704E3] font-medium hover:underline text-base"
              >
                +234 8098765566
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 lg:pt-10 text-center border border-[#EBEBEB]">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <Mail className="w-10 h-10 lg:w-12 lg:h-12 text-[#5704E3]" />
            </div>
            <h3 className="text-2xl lg:text-2xl font-semibold text-gray-900 mb-3">
              Email address
            </h3>
            <p className="text-gray-600 mb-4 text-base w-4/5 mx-auto">
              Send us a message via our official email address
            </p>
            <a
              href="mailto:vancorehelp@gmail.com"
              className="text-[#5704E3] font-medium hover:underline text-base break-all"
            >
              vancorehelp@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:pt-10 text-center border border-[#EBEBEB]">
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <MessageCircle className="w-10 h-10 lg:w-12 lg:h-12 text-[#5704E3]" />
            </div>
            <h3 className="text-lg lg:text-2xl font-semibold text-gray-900 mb-3">
              Live chat
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              We are online 24/7. Chat with us for support
            </p>
            <button
              onClick={() => setCurrentScreen("chat")}
              className="bg-white text-[#5704E3] border border-[#EBEBEB] px-6 py-3 rounded-xl font-medium hover:bg-[#5704E3] hover:text-white transition-colors text-sm lg:text-sm"
            >
              Start live chat
            </button>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setCurrentScreen("help")}
            className="bg-[#5704E3] text-white px-10 py-4 rounded-xl font-medium hover:bg-[#5704E3] transition-colors text-base"
          >
            Browse Help Center
          </button>
        </div>
      </div>
    </div>
  );

  const ChatScreen = () => (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      <div className="hidden lg:block w-80 bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <button
            onClick={() => setCurrentScreen("help")}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Contact
          </button>
          <h2 className="text-xl font-semibold text-gray-900">Support Chat</h2>
          <p className="text-gray-600">Live chat with our team</p>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-[#5704E3] rounded-full flex items-center justify-center text-white">
              👩🏾‍💼
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Duchess</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Vancore Agent</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Our team is here to help you with any questions or concerns you may
            have.
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white px-4 py-4 flex items-center shadow-sm">
          <button
            onClick={() => setCurrentScreen("contact")}
            className="mr-4 p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#5704E3] rounded-full flex items-center justify-center text-white text-sm mr-3">
              👩🏾‍💼
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Duchess</h3>
              <p className="text-sm text-gray-600">Chat with the team</p>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block bg-white px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#5704E3] rounded-full flex items-center justify-center text-white">
                👩🏾‍💼
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Duchess</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Online now</span>
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Typically replies in a few minutes
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 lg:p-6 space-y-6 overflow-y-auto">
          {chatMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.sender === "agent" && (
                <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
                  <div className="w-8 h-8 bg-[#5704E3] rounded-full flex items-center justify-center text-white text-xs flex-shrink-0">
                    {message.avatar}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-gray-900">
                        {message.name}
                      </span>
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-xs text-gray-600">
                        {message.role}
                      </span>
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-md p-4 shadow-sm border">
                      <p className="text-gray-800">{message.message}</p>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">Just now</div>
                  </div>
                </div>
              )}
              {message.sender === "user" && (
                <div className="max-w-xs lg:max-w-md">
                  <div className="bg-blue-600 text-white rounded-2xl rounded-tr-md p-4">
                    <p>{message.message}</p>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 text-right">
                    Just now
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="bg-white p-4 lg:p-6 border-t">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message......."
              className="flex-1 border border-gray-300 rounded-full px-4 py-3 lg:px-6 lg:py-4 focus:outline-none focus:ring-2 focus:ring-[#5704E3] focus:border-transparent text-sm lg:text-base"
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleSendMessage}
              className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const HelpScreen = () => {
    const filteredFAQs = faqItems.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div
        className="min-h-screen bg-[] text-white"
        style={{
          background:
            "linear-gradient(180.02deg, #280269 -7.5%, #862EE1 17.37%, #FFFFFF 43.11%)",
        }}
      >
        <div className="lg:flex lg:max-w-7xl lg:mx-auto">
          <div className="hidden lg:block lg:w-80 bg-purple-600 min-h-screen">
            <div className="p-8">
              <button
                onClick={() => setCurrentScreen("contact")}
                className="flex items-center text-purple-200 hover:text-white mb-8 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Contact
              </button>

              <div className="flex items-center gap-1 mb-8">
                <img src={vancore} alt="Vancore logo" className="w-10 h-10" />

                <span className="text-xl font-bold">Vancore</span>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Help Center</h2>
                <p className="text-purple-200">
                  Find answers to common questions
                </p>
              </div>

              <div className="bg-white rounded-xl p-4 text-gray-900 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Ask a question</h3>
                    <p className="text-sm text-gray-600">
                      A Vancore agent can help
                    </p>
                  </div>
                  <button
                    onClick={() => setCurrentScreen("chat")}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="lg:hidden p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <button
                    onClick={() => setCurrentScreen("contact")}
                    className="mr-4 p-2 hover:bg-[#5704E3] rounded-full"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <img src={vancore} alt="Vancore logo" className="w-10 h-10" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-purple-400 rounded-full border-2 border-white"></div>
                  </div>
                  <button className="p-2 hover:bg-[#5704E3] rounded-full">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="mb-8">
                <h1 className="text-2xl font-bold mb-2">Hello Susan,</h1>
                <p className="text-purple-200">How can we help you?</p>
              </div>

              <div className="bg-white rounded-xl p-4 mb-6 text-gray-900">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Ask a question</h3>
                    <p className="text-sm text-gray-600">
                      A Vancore agent can help
                    </p>
                  </div>
                  <button
                    onClick={() => setCurrentScreen("chat")}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block p-8 pb-0">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 bg-purple-400 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-purple-400 rounded-full border-2 border-white"></div>
                    <div className="w-10 h-10 bg-purple-400 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="text-purple-200 ml-4">3 agents online</span>
                </div>
                <button className="p-2 hover:bg-[#5704E3] rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-1">Hello Susan,</h3>
                <p className="text-xl text-purple-200">
                  How can we help you today?
                </p>
              </div>
            </div>

            <div className="px-6 lg:px-8 mb-8"></div>

            <div className="px-6 lg:px-8 space-y-0">
              <div className="bg-white text-black rounded-xl overflow-hidden border border-[#EBEBEB]">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for help"
                    className="w-full m-4  bg-[#FAFAFA] rounded-xl px-2 py-3 lg:py-4 pl-12 placeholder-[#444444] text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-base lg:text-lg"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-" />
                </div>
                {filteredFAQs.map((item, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-4 border-b border-purple-500 border-opacity-30 last:border-b-0 hover:bg-white hover:bg-opacity-10 transition-colors flex items-center justify-between group"
                  >
                    <span className="text-black text-base lg:text-lg">
                      {item}
                    </span>
                    <ChevronRight className="w-5 h-5  group-hover:text-[#5704E3] transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            <div className="h-8"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white min-h-screen">
      <Navbar />
      <div className="max-w-md mx-auto lg:max-w-none">
        {currentScreen === "contact" && <ContactScreen />}
        {currentScreen === "chat" && <ChatScreen />}
        {currentScreen === "help" && <HelpScreen />}
      </div>
    </div>
  );
};

export default HelpSupport;
