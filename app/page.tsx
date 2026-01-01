import Image from "next/image";

import Link from "next/link";
import HeroBackdrop from "./components/HeroBackdrop";

export default function HomePage() {
  return (
    <>





      <section className="hero" style={{ position: "relative" }}>
  <HeroBackdrop />
  <div style={{ position: "relative" }}>
    {/* existing hero content stays the same */}
        <span className="badge">Principal Consulting • Cloud-Native Platforms</span>
        <h1>Enterprise Billing, Cloud Platform & DevOps Consulting</h1>
	 <div className="introGrid">
    {/* Text */}
        <div className="introText">



<h2>DevOps & Release Engineering Services</h2>

<p>
Coastonia Technology Services provides secure, reliable, and repeatable DevOps solutions that enable organizations to deploy and operate cloud-based applications with confidence.

Our DevOps capabilities include:

<strong>Secure secrets management</strong> using encrypted Vault services and enterprise security best practices

<strong>Environment initialization and database bootstrapping</strong>, including release-aligned baseline execution

<strong>Centralized application configuration management</strong> across databases and secure vaults

<strong>CI/CD pipeline configuration and optimization</strong> for controlled, branch-based deployments

<strong>Kubernetes deployment automation</strong>, including namespace targeting and environment validation

<strong>Deployment readiness reviews</strong> to ensure consistency across development, staging, and production environments
</p>




	
 	</div>


  {/* Image */}
    <div className="introVisual">
      <Image
        src="/images/devops-cicd-transparent.png"
        alt="DevOps and CI/CD lifecycle for cloud-native platforms"
        width={1400}
        height={800}
        priority
      />
    </div>



 {/* Image */}
    <div className="introVisual">
      <Image
        src="/images/billing-rev-man-transparent.png"
        alt="Billing and Revenue Management"
        width={1400}
        height={800}
        priority
      />
    </div>

<div className="introText">
 <p>
                From <strong>Oracle BRM</strong> to <strong>AWS-hosted microservices</strong>, Coastonia helps clients design, operate,
                modernize, and scale platforms that must be reliable, secure, and cost-efficient.
                </p>
 </div>
   </div>








        <div className="kv">
          <span className="badge">Oracle BRM (v6.2–7.5)</span>
          <span className="badge">AWS (EC2 • S3 • RDS)</span>
          <span className="badge">Kubernetes (kubectl)</span>
          <span className="badge">GitLab CI/CD</span>
          <span className="badge">PostgreSQL (RDS)</span>
          <span className="badge">Vault • Redis</span>
        </div>

        <div className="ctaRow">
           <Link className="buttonPrimary" href="/contact">Contact</Link>
  <Link className="buttonGhost" href="/services">Services</Link>
  <Link className="buttonGhost" href="/resources">Resources</Link>
        </div>
    </div>
      </section>








<div className="divider" />
      
      <section className="section">
        <h2>What Coastonia Technology Services Delivers</h2>
        <div className="grid cols-3">
          <div className="card">
            <h3>💳 Enterprise Billing & Oracle BRM</h3>
            <p>Oracle BRM consulting, modernization, upgrades/migrations, and end-to-end billing enablement.</p>
          </div>
          <div className="card">
            <h3>Cloud Platforms (AWS)</h3>
            <p>AWS-hosted microservices operations, Kubernetes delivery, RDS/PostgreSQL ownership, and platform reliability.</p>
          </div>
          <div className="card">
            <h3>DevOps & Release Governance</h3>
            <p>CI/CD design and governance, release management, environment strategy, and operational excellence.</p>
          </div>
        </div>
      </section>
<div className="divider" />
      {/* Clients anchor target */}
      <section id="clients" className="section anchorTarget">
        <h2>Selected Clients & Engagements</h2>
        <p>
          Coastonia Technology Services works with organizations operating enterprise-scale, cloud-native platforms, providing
          hands-on architectural and operational leadership.
        </p>

        <div className="grid cols-2">
          <div className="card">
            <h3>Congero Technology Group</h3>
            <p>
              Principal consulting engagement providing platform architecture, DevOps leadership, and release governance for
              cloud-based billing systems.
            </p>
          </div>
          <div className="card">
            <h3>Embrix</h3>
            <p>
              Architectural and operational support for a cloud-native, microservices-based billing platform hosted on AWS.
            </p>
          </div>
        </div>

        <p style={{marginTop: "12px"}}>
          <em>Additional client references and engagement details are available upon request.</em>
        </p>
      </section>
<div className="divider" />
      <section className="section">
        <h2>How Coastonia Engages</h2>
        <ul className="list">
          <li><strong>Principal ownership</strong> of architecture, delivery, and operational outcomes.</li>
          <li><strong>Hands-on execution</strong> alongside engineering teams and stakeholders.</li>
          <li><strong>Client-safe communication</strong> with optional deeper references available privately.</li>
        </ul>
      </section>
    </>
  );
}
