import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import TalkBanner from "../components/TalkBanner";
import SimpleFooter from "../components/SimpleFooter";

// Professional blog data inspired by PureLogics content
const blogPosts = [
  {
    id: 1,
    title: "Why Modern Hospital Management Software Is Essential for Streamlined Operations and Better Care Delivery",
    excerpt: "Hospitals now face unprecedented challenges like rising operational costs, increasing regulatory pressure, growing patient expectations, and staff burnout. Indeed, the traditional solutions are no longer enough to meet these challenges.",
    content: `
      <h2>Introduction</h2>
      <p>Hospitals now face unprecedented challenges like rising operational costs, increasing regulatory pressure, growing patient expectations, and staff burnout. Indeed, the traditional solutions are no longer enough to meet these challenges.</p>
      
      <h2>The Current Healthcare Landscape</h2>
      <p>Additionally, the mounting pressure of being compliant with strict data protection regulations (HIPAA in the US and GDPR in Europe) is making the situation more complex. Modern hospital management software addresses these challenges by providing integrated solutions that streamline operations and improve patient care delivery.</p>
      
      <h2>Key Benefits of Modern Hospital Management Systems</h2>
      <p>Modern hospital management software offers several critical advantages:</p>
      <ul>
        <li>Streamlined patient registration and admission processes</li>
        <li>Automated billing and revenue cycle management</li>
        <li>Enhanced clinical decision support</li>
        <li>Improved communication between departments</li>
        <li>Better compliance with healthcare regulations</li>
      </ul>
      
      <h2>Implementation Considerations</h2>
      <p>When implementing hospital management software, healthcare organizations must consider factors such as integration capabilities, user training requirements, and data migration strategies. The right solution can transform healthcare delivery and improve patient outcomes.</p>
      
      <h2>Conclusion</h2>
      <p>Modern hospital management software is not just a technological upgrade—it's a strategic investment in better healthcare delivery. Organizations that embrace these solutions will be better positioned to meet the evolving demands of healthcare delivery.</p>
    `,
    author: "Dr. Sarah Mitchell",
    date: "2024-01-15",
    readTime: "7 min read",
    category: "Healthcare",
    tags: ["Healthcare", "Software Development", "Digital Transformation"],
    image: "https://b2461891.smushcdn.com/2461891/wp-content/uploads/2021/10/hospital-management-system.jpg?lossy=1&strip=1&webp=1",
    slug: "modern-hospital-management-software-essential"
  },
  {
    id: 2,
    title: "LLM-Enabled Clinical Protocol Audit: Automating Quality Assurance Workflows",
    excerpt: "The Harvard Medical School study this year found that an open-source LLM performed on par with GPT-4 for diagnostically challenging cases, highlighting that large language models are advancing in their capability to reason clinically.",
    content: `
      <h2>Introduction</h2>
      <p>The Harvard Medical School study this year found that an open-source LLM performed on par with GPT-4 for diagnostically challenging cases, highlighting that large language models are advancing in their capability to reason clinically, not just recall data.</p>
      
      <h2>Clinical Protocol Automation</h2>
      <p>However, the real question is whether these models can assist with routine documentation tasks, such as summarizing patient encounters, generating clinical notes, and auditing protocol compliance. LLM-enabled clinical protocol audit systems are showing promising results in automating quality assurance workflows.</p>
      
      <h2>Implementation Benefits</h2>
      <p>Key advantages of LLM-enabled clinical protocol audit include:</p>
      <ul>
        <li>Automated compliance checking</li>
        <li>Reduced manual audit workload</li>
        <li>Improved accuracy in protocol adherence</li>
        <li>Real-time quality assurance feedback</li>
        <li>Enhanced clinical decision support</li>
      </ul>
      
      <h2>Future Implications</h2>
      <p>As LLM technology continues to evolve, we can expect even more sophisticated clinical protocol audit capabilities that will further enhance healthcare quality and efficiency.</p>
    `,
    author: "Dr. Michael Chen",
    date: "2024-01-10",
    readTime: "3 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Healthcare", "Machine Learning", "Clinical Protocols"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&crop=center",
    slug: "llm-enabled-clinical-protocol-audit"
  },
  {
    id: 3,
    title: "How Ambient Listening Is Shaping Clinical Documentation in Healthcare",
    excerpt: "Healthcare documentation has reached a crisis point. Physicians spend hours on administrative tasks, contributing to widespread burnout and diminished care quality. Here, ambient listening in healthcare offers an efficient solution to this challenge.",
    content: `
      <h2>The Documentation Crisis</h2>
      <p>Healthcare documentation has reached a crisis point. Physicians spend hours on administrative tasks, contributing to widespread burnout and diminished care quality. Here, ambient listening in healthcare offers an efficient solution to this challenge.</p>
      
      <h2>Ambient Listening Technology</h2>
      <p>Its practical benefits for physicians are enormous. As indicated by Emory Healthcare's study, which points out that after using ambient listening technology, physicians reported significant improvements in documentation efficiency and patient interaction quality.</p>
      
      <h2>Key Benefits</h2>
      <p>Ambient listening technology provides several advantages:</p>
      <ul>
        <li>Automated clinical note generation</li>
        <li>Reduced documentation time</li>
        <li>Improved physician-patient interaction</li>
        <li>Enhanced accuracy in medical records</li>
        <li>Reduced administrative burden</li>
      </ul>
      
      <h2>Implementation Considerations</h2>
      <p>Healthcare organizations implementing ambient listening must consider privacy regulations, integration with existing systems, and staff training requirements to ensure successful adoption.</p>
      
      <h2>Future Outlook</h2>
      <p>As ambient listening technology matures, it will play an increasingly important role in transforming healthcare documentation and improving overall care delivery.</p>
    `,
    author: "Dr. Emily Rodriguez",
    date: "2024-01-08",
    readTime: "8 min read",
    category: "Healthcare",
    tags: ["Healthcare", "AI", "Documentation", "Clinical Workflow"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop&crop=center",
    slug: "ambient-listening-clinical-documentation"
  },
  {
    id: 4,
    title: "Differential Privacy in AI: What it is and Why it Matters?",
    excerpt: "When working with data, there are three approaches to handling privacy. The first is traditional data, which is raw and unaltered, consisting of personally identifiable information that is highly valuable for analysis but extremely vulnerable to breaches.",
    content: `
      <h2>Understanding Data Privacy Approaches</h2>
      <p>When working with data, there are three approaches to handling privacy. The first is traditional data, which is raw and unaltered, consisting of personally identifiable information that is highly valuable for analysis but extremely vulnerable to breaches.</p>
      
      <h2>Privacy Protection Methods</h2>
      <p>The second one is anonymization, which reduces risk by removing or masking identifiers such as names or IDs; however, this approach often reduces the utility of the data for analysis purposes.</p>
      
      <h2>Differential Privacy Explained</h2>
      <p>Differential privacy represents the third approach, offering a mathematical framework for privacy protection that allows organizations to extract useful insights from data while providing strong privacy guarantees for individuals.</p>
      
      <h2>Key Benefits</h2>
      <p>Differential privacy provides several advantages:</p>
      <ul>
        <li>Strong mathematical privacy guarantees</li>
        <li>Preserved data utility for analysis</li>
        <li>Compliance with privacy regulations</li>
        <li>Protection against various attack vectors</li>
        <li>Scalable privacy protection</li>
      </ul>
      
      <h2>Implementation in AI Systems</h2>
      <p>Implementing differential privacy in AI systems requires careful consideration of privacy parameters, noise mechanisms, and the trade-offs between privacy and utility.</p>
      
      <h2>Future Implications</h2>
      <p>As privacy regulations become more stringent, differential privacy will play an increasingly important role in enabling responsible AI development and deployment.</p>
    `,
    author: "Dr. Alex Thompson",
    date: "2024-01-02",
    readTime: "6 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Privacy", "Data Protection", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center",
    slug: "differential-privacy-ai-why-matters"
  },
  {
    id: 5,
    title: "Telemedicine Software Benefits: How Virtual Care Improves Patient Access and Provider Efficiency",
    excerpt: "Healthcare delivery has changed. Today, telemedicine software determines patient satisfaction scores, operational efficiency, and competitive edge. It also addresses the two critical needs of the healthcare industry.",
    content: `
      <h2>The Evolution of Healthcare Delivery</h2>
      <p>Healthcare delivery has changed. Today, telemedicine software determines patient satisfaction scores, operational efficiency, and competitive edge. It also addresses the two critical needs of the healthcare industry: providing patients with faster, more convenient access to their providers, and reducing the administrative overhead for healthcare teams.</p>
      
      <h2>Key Benefits of Telemedicine</h2>
      <p>This enables them to work more efficiently while expanding their reach to serve more patients. Telemedicine software offers several key benefits:</p>
      
      <ul>
        <li>Improved patient access to care</li>
        <li>Reduced travel time and costs</li>
        <li>Enhanced provider efficiency</li>
        <li>Better chronic disease management</li>
        <li>Increased patient satisfaction</li>
      </ul>
      
      <h2>Implementation Considerations</h2>
      <p>Healthcare organizations implementing telemedicine solutions must consider factors such as technology infrastructure, regulatory compliance, staff training, and patient adoption strategies.</p>
      
      <h2>Future of Virtual Care</h2>
      <p>As telemedicine technology continues to evolve, we can expect even more sophisticated virtual care capabilities that will further enhance healthcare delivery and patient outcomes.</p>
    `,
    author: "Dr. Lisa Wang",
    date: "2023-12-28",
    readTime: "9 min read",
    category: "Healthcare",
    tags: ["Healthcare", "Telemedicine", "Digital Health", "Patient Care"],
    image: "https://diceus.com/wp-content/uploads/2021/08/telemedicine_software_development_1.png",
    slug: "telemedicine-software-benefits-virtual-care"
  },
  {
    id: 6,
    title: "Enterprise Hybrid Cloud: Architecture, Deployment, and Optimization Strategies",
    excerpt: "Hybrid cloud merges public cloud, private cloud, and on-premises infrastructure into a unified, adaptable, and cost-effective IT framework. One of its standout benefits is agility, enabling organizations to swiftly adjust to changes.",
    content: `
      <h2>Understanding Hybrid Cloud Architecture</h2>
      <p>Hybrid cloud merges public cloud, private cloud, and on-premises infrastructure into a unified, adaptable, and cost-effective IT framework. One of its standout benefits is agility, enabling organizations to swiftly adjust to changes and capitalize on growth opportunities by quickly provisioning computing resources.</p>
      
      <h2>Key Advantages</h2>
      <p>Moreover, hybrid cloud integration enables companies to adopt technologies such as artificial intelligence and machine learning more effectively. Key advantages include:</p>
      
      <ul>
        <li>Flexibility in workload placement</li>
        <li>Cost optimization through resource sharing</li>
        <li>Enhanced security and compliance</li>
        <li>Improved disaster recovery capabilities</li>
        <li>Scalability and performance optimization</li>
      </ul>
      
      <h2>Deployment Strategies</h2>
      <p>Successful hybrid cloud deployment requires careful planning around workload distribution, data management, security policies, and integration strategies between different cloud environments.</p>
      
      <h2>Optimization Best Practices</h2>
      <p>Organizations can optimize their hybrid cloud implementations through continuous monitoring, automated resource management, and regular performance assessments.</p>
      
      <h2>Future Trends</h2>
      <p>As hybrid cloud technology matures, we can expect more sophisticated automation, enhanced security features, and improved integration capabilities.</p>
    `,
    author: "James Anderson",
    date: "2023-12-25",
    readTime: "8 min read",
    category: "Cloud Technologies",
    tags: ["Cloud Computing", "Hybrid Cloud", "Enterprise Architecture", "DevOps"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=center",
    slug: "enterprise-hybrid-cloud-architecture-deployment"
  }
];

const categories = ["All", "Healthcare", "Artificial Intelligence", "Cloud Technologies", "Software Development", "Digital Transformation"];

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter blogs based on category and search query
  const filteredBlogs = useMemo(() => {
    return blogPosts.filter(blog => {
      const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
      const matchesSearch = searchQuery === "" || 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen text-white">
      {/* Header Section - PureLogics Style */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Navigate our blog wrapped with the latest technology knowledge, trends, innovations, and insights.
            </h1>
            <p className="text-lg text-white/80 max-w-4xl mx-auto">
              Stay updated with cutting-edge insights in healthcare technology, AI, cloud computing, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                 <input
                   type="text"
                   placeholder="Search articles..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full px-4 py-3 pl-10 bg-transparent border border-green-500/50 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                 />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                   className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                     selectedCategory === category
                       ? "bg-green-500 text-white"
                       : "bg-transparent text-white hover:bg-green-500/20 border border-green-500/50"
                   }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           {filteredBlogs.length === 0 ? (
             <div className="text-center py-16">
               <div className="text-6xl mb-4">🔍</div>
               <h3 className="text-2xl font-semibold mb-2 text-white">No articles found</h3>
               <p className="text-white/60">Try adjusting your search or filter criteria</p>
             </div>
          ) : (
            <div className="space-y-8">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-transparent rounded-2xl p-8 border border-green-500/50">
            <h2 className="text-3xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
            <p className="text-white/80 mb-6">
              Get the latest articles and insights delivered to your inbox. No spam, just valuable content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-transparent border border-green-500/50 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
              />
              <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Talk Banner */}
      <TalkBanner 
        email="hello@orbitwalls.com"
        bg="#034159"
        textColor="#ffffff"
        subColor="#0CF25D"
      />
      
      {/* Footer */}
      <SimpleFooter />
    </div>
  );
}

// Blog Card Component - Dark Theme with Green Accents
function BlogCard({ blog }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="bg-transparent border border-green-500/30 rounded-lg overflow-hidden hover:border-green-500/70 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300">
      <div className="md:flex">
        {/* Image */}
        <div className="md:w-1/3">
          <div className="relative h-48 md:h-full overflow-hidden">
            {!imageLoaded && (
              <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-gray-600 border-t-green-500 rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src={blog.image}
              alt={blog.title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
          </div>
        </div>

        {/* Content */}
        <div className="md:w-2/3 p-6">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
            <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 hover:text-green-400 transition-colors duration-300">
            <Link to={`/blogs/${blog.slug}`}>
              {blog.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-white/80 leading-relaxed mb-4">
            {blog.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">
                {tag}
              </span>
            ))}
          </div>

          {/* Read More Link */}
          <Link
            to={`/blogs/${blog.slug}`}
            className="inline-flex items-center text-green-400 hover:text-green-300 font-medium text-sm transition-colors duration-300"
          >
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}