import React from 'react';
import Timeline from '../components/experience/Timeline';
import TimelineItem from '../components/experience/TimelineItem';

const Experience = () => {
  return (
    <section id="experience" className="py-8 px-6 max-w-4xl mx-auto">
      <h2
        className="text-4xl font-bold mb-12 text-center"
        style={{
          color: 'var(--secondary-color)',
          fontFamily: 'Nero, Arial, sans-serif',
        }}
      >
        Experience
      </h2>
      <Timeline>
        <TimelineItem
          title="Software Developer"
          company="Susquehanna International Group (SIG)"
          date="March 2025 – Present"
          descriptionPoints={[
            'Architected a microservice-based MariaDB log aggregation system to reliably ingest and store up to 2TB of logs daily across 100+ production servers with Grafana Loki, Apache Kafka, and Kubernetes.',
            'Deployed a scalable Python microservice to consume MariaDB query logs from Apache Kafka and forward structured metadata to Grafana Loki, processing 20M+ queries daily per pod in a Kubernetes deployment.',
            'Created Ansible Playbooks to automate the installation and upgrading of MongoDB replica clusters across 100+ servers, reducing setup time by approximately 1 hour per installation.',
            'Optimized GitLab CI/CD pipelines by implementing child pipeline logic for parallelized Docker image builds and automatic Helm chart deployments into Kubernetes, reducing deployment time by 60%.',
            'Enhanced a React TypeScript and Flask monitoring application by integrating Nagios alerting and resolving critical UI issues, delivering real-time alert visibility for 500+ daily production jobs.',
            'Automated daily InfluxDB backups using Python and Bash, ensuring reliable data retention across 50+ Influx instances.'
          ]}
        />
        <TimelineItem
          title="Software Engineer"
          company="America's Main Street Party"
          date="March 2025 – Present"
          descriptionPoints={[
            'Launched a full-stack political engagement platform using Next.js and Supabase, supporting 200+ active members with real-time political content.',
            'Designed 20+ RESTful API endpoints with bearer token authentication, enabling efficient data management with PostgreSQL schemas.',
            'Integrated Redis for session-based request caching, cutting API call volume by 65% on repeated client-side renders.'
          ]}
        />
        <TimelineItem
          title="Course Assistant"
          company="Drexel University College of Computing & Informatics"
          date="January 2025 – March 2025"
          descriptionPoints={[
            'Tutored 50+ students in software engineering foundations, focusing on object-oriented programming, design patterns, and software documentation techniques.',
            'Evaluated 150+ student software projects for compliance with industry-standard practices, including UML diagrams, object-oriented design, and the application of software design patterns.'
          ]}
        />
        <TimelineItem
          title="Software Engineer"
          company="Leidos"
          date="April 2024 – September 2024"
          descriptionPoints={[
            'Developed a reusable login module using Selenium and JavaScript, automating authentication across 15+ internal applications and reducing code redundancy by 20% across 10+ bots.',
            'Engineered a documentation audit bot using C# and the SharePoint API to automate content verification and generate structured Excel reports of missing project files, eliminating 120 minutes of manual processing per audit cycle.',
            'Spearheaded the automation of two high-priority employee reports from 5+ Oracle databases, managing 25,000+ records and cutting processing time by 80%, enabling better resource allocation for the Global Security team.'
          ]}
        />
        <TimelineItem
          title="Data Operations Associate"
          company="DemandScience"
          date="January 2024 – June 2024"
          descriptionPoints={[
            'Optimized email workflow to detect invalid accounts by implementing SQL-based taxonomy rules, reducing manual review time by 40% and improving invalid account detection by 75%.',
            'Created an offline file management tool using Alteryx and AWS S3, enabling employees to perform CRUD operations to 5 files concurrently, enhancing efficiency and accessibility.'
          ]}
        />
      </Timeline>
    </section>
  );
};

export default Experience;
