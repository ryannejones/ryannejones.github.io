const QUESTION_BANK = [
  {
    "question": "Your company runs a global e-commerce platform on GKE. During flash sales, traffic spikes 10x within minutes. The application is stateless. What architecture provides the best cost-performance balance?",
    "scenario": null,
    "options": [
      "Use GKE cluster autoscaler with Horizontal Pod Autoscaler (HPA) based on CPU metrics",
      "Pre-provision clusters at peak capacity and use node affinity to distribute pods",
      "Use GKE cluster autoscaler with HPA based on custom metrics from Cloud Monitoring",
      "Deploy to Cloud Run with automatic scaling and use Cloud CDN for static content"
    ],
    "correctAnswer": 3,
    "explanation": "Cloud Run provides automatic, subsecond scaling for stateless workloads and charges only for actual usage, making it ideal for spiky traffic. Combined with Cloud CDN, this handles flash sales efficiently. GKE has slower scaling and higher baseline costs.",
    "domain": "Design & Planning"
  },
  {
    "question": "An IoT company ingests 500,000 messages per second from sensors. Messages must be processed in order per device. Some processing takes 30 seconds. What architecture ensures ordered processing without message loss?",
    "scenario": null,
    "options": [
      "Pub/Sub with ordering keys per device, Dataflow for processing with exactly-once semantics",
      "Cloud Tasks with device ID in task name, Cloud Run for processing",
      "Kafka on GKE with partitioning by device ID, custom consumer applications",
      "Firestore with transaction processing and Cloud Functions triggered on writes"
    ],
    "correctAnswer": 0,
    "explanation": "Pub/Sub ordering keys guarantee message ordering per key (device), and Dataflow provides exactly-once processing semantics for reliability. This is the managed, scalable solution for high-throughput streaming data.",
    "domain": "Design & Planning"
  },
  {
    "question": "A retail company wants to analyze customer behavior across web, mobile app, and in-store purchases. Data exists in Cloud SQL, Firestore, and on-premises Oracle. What is the most efficient architecture?",
    "scenario": null,
    "options": [
      "Use Datastream to replicate Cloud SQL and Oracle to BigQuery, export Firestore to Cloud Storage, then load to BigQuery",
      "Use Dataflow to ETL all sources into a Cloud SQL data warehouse",
      "Federate queries from BigQuery to Cloud SQL and Oracle using external connections, export Firestore periodically",
      "Use Data Fusion to create ETL pipelines from all sources to BigQuery"
    ],
    "correctAnswer": 3,
    "explanation": "Data Fusion provides a visual interface for building ETL pipelines from multiple sources to BigQuery, which is the appropriate data warehouse for analytics at scale.",
    "domain": "Design & Planning"
  },
  {
    "question": "A SaaS company has multiple customers requiring isolated data. They need to comply with data residency requirements where some customers' data must stay in specific regions. What design pattern should they use?",
    "scenario": null,
    "options": [
      "Use a single dataset with customer_id column and row-level security policies",
      "Create separate datasets per customer with dataset location set per customer requirements",
      "Use table partitioning by customer_id with partition expiration",
      "Create separate projects per customer with appropriate regional configurations"
    ],
    "correctAnswer": 3,
    "explanation": "Separate projects per customer provide the strongest isolation and make regional compliance simple. Each project can have resources in the required region, simplifying billing and access management.",
    "domain": "Design & Planning"
  },
  {
    "question": "Your application requires sub-10ms read latency for user session data accessed globally. Data is frequently updated and must be strongly consistent. What database solution meets these requirements?",
    "scenario": null,
    "options": [
      "Cloud Spanner with multi-region configuration",
      "Firestore in Native mode with data replicated across regions",
      "Cloud Memorystore (Redis) with read replicas in multiple regions",
      "Bigtable with replication enabled across multiple clusters"
    ],
    "correctAnswer": 2,
    "explanation": "Cloud Memorystore (Redis) provides sub-millisecond latency for reads and can be deployed with read replicas across regions for global access. For frequently updated session data, this is ideal.",
    "domain": "Design & Planning"
  },
  {
    "question": "A financial analytics application performs complex calculations on market data. Calculations must complete within 100ms and require the most recent 5 minutes of data. What storage strategy is most appropriate?",
    "scenario": null,
    "options": [
      "Stream data to Pub/Sub, use Dataflow to aggregate into 5-minute windows, store in Memorystore (Redis)",
      "Write data to Bigtable with TTL of 5 minutes, query directly from Bigtable",
      "Stream to BigQuery with streaming inserts, query with time-based filters",
      "Use Firestore with automatic document expiration and real-time queries"
    ],
    "correctAnswer": 0,
    "explanation": "Pub/Sub + Dataflow provides reliable stream processing with windowing. Memorystore (Redis) offers sub-millisecond reads for calculations with pre-aggregated data, meeting the 100ms requirement.",
    "domain": "Design & Planning"
  },
  {
    "question": "An e-commerce site needs to serve product images globally with low latency. Images are updated infrequently. The site receives 10 million requests/day. What is the most cost-effective solution?",
    "scenario": null,
    "options": [
      "Store images in Cloud Storage with Cloud CDN enabled",
      "Store images in Cloud Storage with multiple regional backend buckets via Load Balancing",
      "Deploy images to multiple regional Cloud Storage buckets with Cloud DNS geolocation routing",
      "Use Cloud Storage Nearline class with Cloud CDN"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud Storage with Cloud CDN provides global, low-latency delivery with automatic caching at edge locations. This is the standard, cost-effective pattern for static content delivery.",
    "domain": "Design & Planning"
  },
  {
    "question": "A startup is building a new mobile app backend. They expect rapid growth but traffic is currently minimal. The API is RESTful and stateless. What hosting solution provides the best cost-performance balance?",
    "scenario": null,
    "options": [
      "Cloud Run with automatic scaling from 0 to N instances",
      "GKE Autopilot cluster with Horizontal Pod Autoscaler",
      "Compute Engine with managed instance groups and autoscaling",
      "App Engine Standard environment"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud Run scales to zero when not in use (no baseline costs) and automatically scales up with traffic. This is ideal for unpredictable, growing workloads with minimal operational overhead.",
    "domain": "Design & Planning"
  },
  {
    "question": "A financial institution needs to analyze transaction data in real-time to detect fraud (within 100ms). Historical data (5 years) must be queryable for investigations. What architecture meets these requirements?",
    "scenario": null,
    "options": [
      "Stream to Pub/Sub, use Dataflow for real-time analysis and streaming inserts to BigQuery",
      "Write transactions to Bigtable for real-time lookups, use Dataflow to export to BigQuery for historical analysis",
      "Use Cloud Spanner for both real-time OLTP and analytical queries",
      "Stream to Cloud SQL, use Cloud Functions for fraud detection, export to BigQuery"
    ],
    "correctAnswer": 1,
    "explanation": "Bigtable provides sub-10ms reads for real-time fraud detection. BigQuery handles historical analytical queries efficiently. This properly separates OLTP from OLAP workloads.",
    "domain": "Design & Planning"
  },
  {
    "question": "You need to implement network segmentation for a three-tier application (web, app, database). Each tier should only communicate with adjacent tiers. What is the recommended approach?",
    "scenario": null,
    "options": [
      "Create three VPC networks and use VPC Network Peering with custom routes",
      "Create one VPC with three subnets and use firewall rules to control traffic between subnets",
      "Use separate projects for each tier with Shared VPC",
      "Create three VPC networks and use Cloud VPN to connect them"
    ],
    "correctAnswer": 1,
    "explanation": "A single VPC with multiple subnets and firewall rules is the standard GCP pattern for network segmentation. Firewall rules can precisely control which subnets can communicate.",
    "domain": "Design & Planning"
  },
  {
    "question": "A video streaming service needs to serve video files globally with the lowest possible latency. Videos are large (1-5GB) and accessed frequently. What architecture is optimal?",
    "scenario": null,
    "options": [
      "Store in Cloud Storage with Cloud CDN and Media CDN for optimized video delivery",
      "Store in Cloud Storage and use signed URLs for direct access",
      "Deploy Cloud Storage buckets in multiple regions with DNS-based routing",
      "Use Cloud Filestore mounted to regional VMs serving video files"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud Storage with Media CDN provides optimized video delivery with edge caching globally. Media CDN is specifically designed for large media files and adaptive bitrate streaming.",
    "domain": "Design & Planning"
  },
  {
    "question": "A mobile game backend needs to store leaderboard data showing top 100 players globally. The leaderboard is read millions of times per day and updated thousands of times per day. What database is most efficient?",
    "scenario": null,
    "options": [
      "Use Memorystore (Redis) with sorted sets for leaderboard functionality",
      "Use Firestore with queries sorted by score",
      "Use Cloud SQL with indexed score column and LIMIT 100 queries",
      "Use Bigtable with composite row keys of score#player_id"
    ],
    "correctAnswer": 0,
    "explanation": "Redis sorted sets (ZSET) are specifically designed for leaderboards with O(log N) inserts and range queries. Memorystore provides sub-millisecond latency for millions of reads.",
    "domain": "Design & Planning"
  },
  {
    "question": "Your application writes time-series sensor data at 1 million events per second. Each event is 1KB. Queries typically retrieve data for specific sensors over time ranges. What database is most appropriate?",
    "scenario": null,
    "options": [
      "Bigtable with row keys designed as sensor_id#timestamp",
      "BigQuery with partitioning by timestamp and clustering by sensor_id",
      "Cloud Spanner with timestamp as primary key",
      "Firestore with sensor_id as document ID and sub-collections for timestamps"
    ],
    "correctAnswer": 0,
    "explanation": "Bigtable is purpose-built for high-throughput writes of time-series data. Row key design sensor_id#timestamp naturally orders data for efficient time-range queries per sensor.",
    "domain": "Design & Planning"
  },
  {
    "question": "A gaming company needs to store player profiles queried by player_id. Profiles are 50-100KB each. There are 100 million players. Queries must return in under 10ms. What database is most cost-effective?",
    "scenario": null,
    "options": [
      "Bigtable with player_id as row key",
      "Cloud SQL for PostgreSQL with player_id as primary key",
      "Firestore with player_id as document ID",
      "Memorystore (Redis) with player_id as key"
    ],
    "correctAnswer": 0,
    "explanation": "Bigtable provides single-digit millisecond latency for key-value lookups and scales to billions of rows cost-effectively. It's designed for this use case (large-scale, low-latency lookups).",
    "domain": "Design & Planning"
  },
  {
    "question": "You need to provide external auditors with a centralized view of all security findings from Security Command Center across all projects in your organization. What approach should you use?",
    "scenario": null,
    "options": [
      "Enable Security Command Center at the organization level",
      "Use Cloud Asset Inventory to export security findings from each project to BigQuery",
      "Create a custom script to aggregate findings from each project's Security Command Center",
      "Use Cloud Logging to aggregate all security logs in a central project"
    ],
    "correctAnswer": 0,
    "explanation": "Security Command Center enabled at the organization level automatically provides a centralized view of findings across all projects in the organization. This is the purpose-built solution.",
    "domain": "Design & Planning"
  },
  {
    "question": "A news website experiences a 50x traffic spike when breaking news occurs. The site is primarily static HTML/CSS/JS with a small API for personalization. What architecture provides the best resilience?",
    "scenario": null,
    "options": [
      "Host static content in Cloud Storage with Cloud CDN, API on Cloud Run with autoscaling",
      "Deploy everything to GKE with aggressive Horizontal Pod Autoscaling",
      "Use App Engine Standard for both static and dynamic content",
      "Host on Compute Engine with a large managed instance group"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud Storage + Cloud CDN handles unlimited static traffic with no scaling needed. Cloud Run auto-scales the API from 0 to thousands of instances. This architecture is virtually impossible to overwhelm.",
    "domain": "Design & Planning"
  },
  {
    "question": "A company operates in multiple countries with data residency requirements. Customer data must stay in the country of origin. They use Cloud Spanner for a global application. How should they configure Spanner?",
    "scenario": null,
    "options": [
      "Create separate Spanner instances in each required region with appropriate data routing at the application level",
      "Use a multi-region Spanner instance with row-level data locality based on customer location",
      "Create a single global Spanner instance and rely on replication",
      "Use Spanner's automatic data placement without configuration"
    ],
    "correctAnswer": 0,
    "explanation": "Separate Spanner instances per region/country provide the strongest data residency guarantees. Application logic routes customers to their regional instance based on location.",
    "domain": "Design & Planning"
  },
  {
    "question": "Your application processes streaming data from Pub/Sub and writes aggregated results to BigQuery every 5 minutes. During processing failures, messages should not be lost. What architecture ensures reliability?",
    "scenario": null,
    "options": [
      "Use Dataflow with streaming inserts to BigQuery and Pub/Sub acknowledgment after successful writes",
      "Use Cloud Functions triggered by Pub/Sub, write to BigQuery, acknowledge messages manually",
      "Use Cloud Run Jobs triggered by Pub/Sub push subscriptions with automatic retry",
      "Use GKE with custom consumers, write to BigQuery, then acknowledge messages"
    ],
    "correctAnswer": 0,
    "explanation": "Dataflow provides managed streaming with exactly-once processing semantics. Messages are only acknowledged after successful BigQuery writes, preventing message loss during failures.",
    "domain": "Design & Planning"
  },
  {
    "question": "A video processing application on GKE processes uploaded videos into multiple formats. Processing takes 5-30 minutes. Users should receive notifications when complete. What architecture handles this efficiently?",
    "scenario": null,
    "options": [
      "Use Cloud Tasks to queue processing jobs, GKE workers to process, Pub/Sub to send notifications",
      "Use Pub/Sub to queue jobs, GKE workers with pull subscriptions to process, Cloud Functions for notifications triggered by completion events",
      "Use Cloud Scheduler to periodically check for new uploads and trigger GKE jobs",
      "Use Cloud Storage object notifications to trigger Cloud Run jobs that orchestrate processing"
    ],
    "correctAnswer": 1,
    "explanation": "Pub/Sub for job queuing provides reliable task distribution. GKE workers pull jobs and process them. Publishing completion events to Pub/Sub triggers Cloud Functions for notifications - a robust, decoupled architecture.",
    "domain": "Design & Planning"
  },
  {
    "question": "You're designing a CI/CD pipeline for microservices on GKE. Developers should deploy to dev/staging but only automated pipelines should deploy to production. How should you structure permissions?",
    "scenario": null,
    "options": [
      "Create separate projects for dev/staging/production with different IAM permissions per project",
      "Use namespaces in a single cluster with Kubernetes RBAC to control deployments",
      "Use separate GKE clusters per environment with different IAM permissions on each cluster",
      "Create custom IAM roles that allow deployment to specific GKE namespaces"
    ],
    "correctAnswer": 0,
    "explanation": "Separate projects provide the strongest isolation and clearest IAM boundaries. Developers get permissions in dev/staging projects, while only CI/CD service accounts have deployment permissions in production.",
    "domain": "Design & Planning"
  },
  {
    "question": "A data warehouse in BigQuery contains 10TB of customer data. Analytics queries typically filter by date and customer region. Query performance is slow. What optimization would most improve performance?",
    "scenario": null,
    "options": [
      "Create partitioned tables by date and cluster by region",
      "Enable BigQuery BI Engine for all queries",
      "Create materialized views for common query patterns",
      "Increase the slot quota for your project"
    ],
    "correctAnswer": 0,
    "explanation": "Partitioning by date and clustering by region directly addresses the query filter patterns, dramatically reducing the amount of data scanned. This is the most impactful optimization for query performance.",
    "domain": "Design & Planning"
  },
  {
    "question": "A machine learning model served via Vertex AI Prediction receives unpredictable traffic (10 requests/hour to 1000 requests/second). What deployment configuration optimizes cost while meeting demand?",
    "scenario": null,
    "options": [
      "Use autoscaling with minimum replicas set to 0 and maximum set based on peak load",
      "Deploy with a fixed number of replicas based on average traffic",
      "Use manual scaling and adjust replicas based on monitoring",
      "Deploy multiple model versions and route traffic based on load"
    ],
    "correctAnswer": 0,
    "explanation": "Autoscaling from 0 to peak capacity provides the best cost-performance balance for unpredictable, spiky traffic. You pay only for capacity needed, scaling automatically with demand.",
    "domain": "Design & Planning"
  },
  {
    "question": "Your application stores customer data in Firestore. You need GDPR-compliant data deletion where all of a customer's data can be deleted on request. The application has millions of documents across multiple collections. What strategy ensures complete deletion?",
    "scenario": null,
    "options": [
      "Use a customer_id field in all documents, query all collections for matching documents, delete in batches",
      "Implement collection groups and use Firestore query to find all documents across collections with customer_id",
      "Store all customer data in a single root collection with customer_id as document ID and subcollections for data types",
      "Export Firestore to BigQuery, identify customer documents, then delete from Firestore"
    ],
    "correctAnswer": 2,
    "explanation": "Organizing data with customer_id as root document ID makes deletion simple - delete the root document and all subcollections. This ensures complete deletion and follows Firestore's hierarchical model.",
    "domain": "Design & Planning"
  },
  {
    "question": "A media streaming service experiences sudden traffic spikes during new releases. The backend API runs on Cloud Run. During spikes, some requests timeout. What configuration change would most improve reliability?",
    "scenario": null,
    "options": [
      "Increase the maximum number of instances to allow more concurrent containers",
      "Increase the request timeout value and add more CPU/memory per instance",
      "Enable minimum instances to keep containers warm and reduce cold starts",
      "Implement Cloud CDN in front of Cloud Run to cache responses"
    ],
    "correctAnswer": 0,
    "explanation": "If requests timeout during spikes, Cloud Run likely can't scale fast enough to handle concurrent requests. Increasing max instances allows more concurrent containers to handle the load effectively.",
    "domain": "Design & Planning"
  },
  {
    "question": "An application needs to process user-uploaded images to generate thumbnails. Uploads happen sporadically (0-100/minute). Processing takes 5-10 seconds per image. What is the most cost-effective architecture?",
    "scenario": null,
    "options": [
      "Cloud Storage upload triggers Cloud Functions to generate thumbnails",
      "Cloud Storage notifications to Pub/Sub, Cloud Run workers process from Pub/Sub",
      "Cloud Storage upload triggers Cloud Run jobs",
      "GKE with Horizontal Pod Autoscaler monitoring a work queue"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud Functions triggered by Cloud Storage uploads is the simplest, most cost-effective pattern for sporadic, short-duration processing. Functions scale to zero and pricing is per-invocation.",
    "domain": "Design & Planning"
  },
  {
    "question": "A video streaming service needs to transcode uploaded videos into multiple formats/resolutions. Videos range from 100MB to 10GB. Transcoding takes 10 minutes to 2 hours. What architecture handles this efficiently?",
    "scenario": null,
    "options": [
      "Use Cloud Storage object notifications to trigger Pub/Sub, Cloud Tasks to queue jobs, GKE for transcoding workers",
      "Use Cloud Functions triggered by Cloud Storage uploads to perform transcoding",
      "Use Cloud Run jobs triggered by Pub/Sub messages from Storage notifications",
      "Use Workflows to orchestrate transcoding with Cloud Run for processing"
    ],
    "correctAnswer": 0,
    "explanation": "Storage notifications \u2192 Pub/Sub \u2192 Cloud Tasks queuing \u2192 GKE workers is the robust pattern for long-running jobs with varying sizes. Cloud Tasks provides job deduplication and GKE handles long processes.",
    "domain": "Design & Planning"
  },
  {
    "question": "A mobile app backend on Cloud Run needs to send push notifications to millions of devices. Notification delivery must be reliable and handle temporary device unavailability. What architecture should you implement?",
    "scenario": null,
    "options": [
      "Use Firebase Cloud Messaging (FCM) via Cloud Run, with Pub/Sub for reliable message queuing",
      "Call Firebase Cloud Messaging API directly from Cloud Run without queuing",
      "Use Cloud Tasks to queue notification jobs, Cloud Run workers to send via FCM",
      "Store notification requests in Firestore and use Cloud Scheduler to retry failed deliveries"
    ],
    "correctAnswer": 0,
    "explanation": "Pub/Sub provides reliable message queuing with automatic retries. Cloud Run consumers pull from Pub/Sub and send notifications via FCM. FCM itself handles device unavailability with its own retry logic.",
    "domain": "Design & Planning"
  },
  {
    "question": "You need to migrate a monolithic application from on-premises VMs to Google Cloud. The application has tightly coupled components and takes 6 months to refactor. What migration strategy should you use?",
    "scenario": null,
    "options": [
      "Migrate VMs to Compute Engine using Migrate for Compute Engine, then refactor incrementally",
      "Containerize the entire application immediately and deploy to GKE",
      "Refactor to microservices first, then migrate to Cloud Run",
      "Rewrite the application from scratch using cloud-native services"
    ],
    "correctAnswer": 0,
    "explanation": "The 'lift and shift' approach using Migrate for Compute Engine gets the application to GCP quickly with minimal changes, then allows incremental modernization. This follows the 'migrate, then modernize' pattern.",
    "domain": "Design & Planning"
  },
  {
    "question": "A company acquired another business using Azure. You need to query data stored in Azure Blob Storage from BigQuery. What approach allows this?",
    "scenario": null,
    "options": [
      "Use BigQuery Omni to query Azure Blob Storage directly",
      "Use Transfer Service to copy data from Azure to Cloud Storage, then load to BigQuery",
      "Set up Cloud VPN to Azure and use BigQuery external tables pointing to Azure",
      "Export data from Azure to Cloud Storage via gsutil, then query with external tables"
    ],
    "correctAnswer": 0,
    "explanation": "BigQuery Omni extends BigQuery to query data in AWS and Azure directly without moving it. This is the purpose-built solution for cross-cloud analytics without data duplication.",
    "domain": "Design & Planning"
  },
  {
    "question": "A SaaS application serves thousands of customers. Each customer's data must be encrypted with a separate encryption key, and customers should be able to revoke access to their data. What key management strategy should you use?",
    "scenario": null,
    "options": [
      "Use Cloud KMS with a separate key per customer and grant customers access to destroy their keys",
      "Use customer-supplied encryption keys (CSEK) with keys stored in each customer's external key management system",
      "Use a single Cloud KMS key with envelope encryption and customer-specific data encryption keys",
      "Use application-level encryption with customer-specific keys stored in Secret Manager"
    ],
    "correctAnswer": 1,
    "explanation": "Customer-supplied encryption keys (CSEK) allow customers to control their own encryption keys outside of GCP. They can revoke access by simply not providing their key, giving them true control.",
    "domain": "Design & Planning"
  },
  {
    "question": "Your team needs to migrate a 50TB PostgreSQL database to Google Cloud with minimal downtime (< 1 hour). The database receives continuous writes. What migration strategy should you use?",
    "scenario": null,
    "options": [
      "Use Database Migration Service with continuous replication, then cutover during maintenance window",
      "Export to Cloud Storage using pg_dump, then import to Cloud SQL",
      "Set up logical replication to Cloud SQL manually, then switch connection strings",
      "Use Transfer Appliance to move data, then apply transaction logs"
    ],
    "correctAnswer": 0,
    "explanation": "Database Migration Service handles continuous replication with minimal downtime for PostgreSQL migrations. It manages the complexity of ongoing replication and cutover automatically.",
    "domain": "Implementation"
  },
  {
    "question": "A company acquired another company. You need to migrate their AWS-hosted applications to GCP while maintaining connectivity to their AWS resources during a 6-month transition. What networking solution should you implement?",
    "scenario": null,
    "options": [
      "Set up Cloud VPN tunnels between GCP and AWS VPCs",
      "Use Partner Interconnect to establish dedicated connectivity to AWS",
      "Configure VPC Network Peering between GCP and AWS",
      "Use Cloud NAT and public IP addresses for communication"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud VPN provides encrypted site-to-site connectivity between GCP and AWS at reasonable cost and complexity for a temporary transition. Partner Interconnect is high cost for temporary needs.",
    "domain": "Implementation"
  },
  {
    "question": "Your team uses Terraform to manage GCP infrastructure. You need to ensure that no one can directly modify resources in production via console or gcloud. What control should you implement?",
    "scenario": null,
    "options": [
      "Use Organization Policy to prevent manual resource modifications",
      "Remove Editor and Owner roles from all users in production projects",
      "Enable audit logging and alert on manual resource changes",
      "Use VPC Service Controls to restrict API access"
    ],
    "correctAnswer": 1,
    "explanation": "Removing Editor/Owner roles and granting only specific, limited permissions (like Viewer + specific automation roles) prevents manual changes. Organization Policies don't have constraints to prevent all manual changes.",
    "domain": "Implementation"
  },
  {
    "question": "Your company policy requires all production deployments to be approved by a security team before execution. Deployments use Cloud Build. How do you enforce this approval requirement?",
    "scenario": null,
    "options": [
      "Use Binary Authorization with attestation requirements and manual attestation after security review",
      "Add manual approval steps in Cloud Build triggers",
      "Use Cloud Scheduler to delay builds until approval is received via Pub/Sub",
      "Implement branch protection in git and require security team approval before merging"
    ],
    "correctAnswer": 0,
    "explanation": "Binary Authorization enforces deployment policies requiring attestations. Security team creates attestations after review, and only attested artifacts can be deployed. This is cryptographically secure and enforceable.",
    "domain": "Implementation"
  },
  {
    "question": "A data science team needs to run distributed TensorFlow training across multiple GPUs and VMs. The training dataset is 10TB in Cloud Storage. What compute solution provides the best performance?",
    "scenario": null,
    "options": [
      "Vertex AI Training with reduction server for distributed training and GPUs",
      "GKE with GPU node pools and NFS volumes for dataset access",
      "Compute Engine VMs with attached GPUs and parallel gsutil for data loading",
      "Dataflow with TensorFlow Transform for data preparation and training"
    ],
    "correctAnswer": 0,
    "explanation": "Vertex AI Training is purpose-built for distributed ML training with built-in support for reduction servers, distributed training strategies, and efficient data loading from Cloud Storage.",
    "domain": "Implementation"
  },
  {
    "question": "A machine learning team needs to share Jupyter notebooks and collaborate on ML experiments. They need GPU access and pre-installed ML frameworks. What GCP service best meets these needs?",
    "scenario": null,
    "options": [
      "Vertex AI Workbench managed notebooks",
      "Cloud Shell with custom Docker containers",
      "Compute Engine VMs with JupyterLab manually installed",
      "GKE with JupyterHub deployed"
    ],
    "correctAnswer": 0,
    "explanation": "Vertex AI Workbench provides managed Jupyter instances with pre-installed ML frameworks, GPU support, and integration with other Vertex AI services. It's purpose-built for ML collaboration.",
    "domain": "Implementation"
  },
  {
    "question": "You need to perform a large-scale heterogeneous database migration from Oracle to Cloud SQL for PostgreSQL. The 20TB database must remain online during migration. What is the best approach?",
    "scenario": null,
    "options": [
      "Use Database Migration Service with continuous replication for heterogeneous migration",
      "Use ora2pg to convert schema and data, then load into Cloud SQL",
      "Set up Oracle GoldenGate replication to Cloud SQL",
      "Use Dataflow with JDBC connectors to stream data from Oracle to Cloud SQL"
    ],
    "correctAnswer": 0,
    "explanation": "Database Migration Service supports heterogeneous migrations (Oracle to PostgreSQL) with continuous replication, minimizing downtime. It handles schema conversion and ongoing data synchronization.",
    "domain": "Implementation"
  },
  {
    "question": "Your company runs a legacy application requiring a specific kernel module not available in standard GCP images. The application must run on GCP. What approach should you use?",
    "scenario": null,
    "options": [
      "Create a custom VM image with the required kernel module pre-installed",
      "Use startup scripts to compile and install the kernel module on boot",
      "Request Google Cloud Support to modify the base images",
      "Run the application in containers with the kernel module mounted from the host"
    ],
    "correctAnswer": 0,
    "explanation": "Creating a custom image with the kernel module pre-installed is the cleanest approach - instances boot ready to run. Startup scripts add boot time and complexity.",
    "domain": "Implementation"
  },
  {
    "question": "Your development team uses Cloud Shell frequently and needs to install custom tools that persist across Cloud Shell sessions. What approach should they use?",
    "scenario": null,
    "options": [
      "Create startup scripts in $HOME that install tools when Cloud Shell initializes",
      "Install tools to /usr/local/bin which persists across sessions",
      "Use Docker containers in Cloud Shell with tools pre-installed",
      "Request Google Cloud Support to pre-install tools in the base image"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud Shell's $HOME directory persists across sessions. Startup scripts (like .customize_environment or .bashrc) can automatically install tools when Cloud Shell starts.",
    "domain": "Implementation"
  },
  {
    "question": "Your application needs to perform a major version upgrade of Cloud SQL for PostgreSQL with minimal downtime. What is the recommended approach?",
    "scenario": null,
    "options": [
      "Create a read replica, upgrade the replica, promote it to master, and redirect application traffic",
      "Use Cloud SQL's in-place upgrade feature during a maintenance window",
      "Use Database Migration Service to migrate to a new Cloud SQL instance with the new version",
      "Export data with pg_dump, create a new instance with new version, import data"
    ],
    "correctAnswer": 0,
    "explanation": "Creating and upgrading a read replica, then promoting it, provides the safest minimal-downtime upgrade path. If issues occur, you can fall back to the original instance.",
    "domain": "Implementation"
  },
  {
    "question": "Your team uses Cloud Build for CI/CD. Build artifacts need to be stored and version-controlled for compliance. Artifacts from failed builds should be deleted after 7 days. What solution meets these requirements?",
    "scenario": null,
    "options": [
      "Store artifacts in Cloud Storage with Object Lifecycle Management to delete objects created by failed builds after 7 days, use metadata tags to mark build status",
      "Store artifacts in Artifact Registry with automatic cleanup policies",
      "Use Cloud Build's built-in artifact storage with custom retention policies",
      "Store artifacts in Cloud Storage Standard class for successful builds and Nearline for failed builds with 7-day lifecycle"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud Storage with lifecycle management and metadata tags provides flexible retention policies. Tag artifacts from failed builds and create lifecycle rules to delete them after 7 days.",
    "domain": "Implementation"
  },
  {
    "question": "Your organization wants to enforce that all new Cloud Storage buckets use the Standard storage class and be located in the US multi-region. How do you implement this control?",
    "scenario": null,
    "options": [
      "Create an Organization Policy constraint that restricts resource locations to 'in:us-locations' and set default storage class",
      "Use Cloud Asset Inventory to detect non-compliant buckets and automatically remediate",
      "Create custom IAM roles that only allow bucket creation in US regions",
      "Implement a Cloud Function that validates bucket configuration on creation and deletes non-compliant buckets"
    ],
    "correctAnswer": 0,
    "explanation": "Organization Policies provide preventive controls. The 'gcp.resourceLocations' constraint restricts bucket locations. This prevents non-compliant resources at creation time.",
    "domain": "Implementation"
  },
  {
    "question": "An application logs contain sensitive customer PII that must not be stored. Logs are sent to Cloud Logging. How do you prevent PII from being persisted?",
    "scenario": null,
    "options": [
      "Use Cloud DLP to create log exclusion filters that drop log entries containing PII",
      "Configure log sinks to de-identify data with Cloud DLP before export to Cloud Storage",
      "Use log views with field-level filtering to exclude PII fields",
      "Implement application-level redaction before logging"
    ],
    "correctAnswer": 3,
    "explanation": "The best practice is to prevent PII from being logged in the first place through application-level redaction. This is defense-in-depth - PII never enters the logging pipeline.",
    "domain": "Implementation"
  },
  {
    "question": "An application writes application logs, access logs, and security logs with different retention requirements: application (30 days), access (90 days), security (7 years). How should you structure Cloud Logging?",
    "scenario": null,
    "options": [
      "Create separate log sinks for each log type, export to Cloud Storage buckets with different retention policies",
      "Use a single log sink with log filters to route different log types to different storage buckets",
      "Keep all logs in Cloud Logging with the longest retention period required (7 years)",
      "Use log exclusion filters to delete logs at different intervals"
    ],
    "correctAnswer": 1,
    "explanation": "A single log sink with filters can route different log types to different destinations (Storage buckets) with appropriate retention policies. This is efficient and maintainable.",
    "domain": "Implementation"
  },
  {
    "question": "Your development team wants to test infrastructure changes before applying to production. They use Terraform. What practice minimizes risk of production incidents?",
    "scenario": null,
    "options": [
      "Use separate GCP projects for dev/staging/production with identical Terraform configurations and test in dev first",
      "Use Terraform workspaces to manage different environments in the same project",
      "Run terraform plan in production to preview changes before applying",
      "Use git branches for environment-specific configurations"
    ],
    "correctAnswer": 0,
    "explanation": "Separate projects with identical configurations provide true isolation for testing. Changes are validated in dev, then promoted to staging and production with confidence.",
    "domain": "Implementation"
  },
  {
    "question": "A CI/CD pipeline builds Docker images and needs to scan them for vulnerabilities before deployment to production. What GCP service provides this capability?",
    "scenario": null,
    "options": [
      "Container Analysis API integrated with Artifact Registry",
      "Security Command Center with container scanning enabled",
      "Cloud Build with custom vulnerability scanning steps",
      "Binary Authorization with attestation requirements"
    ],
    "correctAnswer": 0,
    "explanation": "Container Analysis API automatically scans images stored in Artifact Registry for vulnerabilities and provides detailed reports. It's integrated and purpose-built for this use case.",
    "domain": "Implementation"
  },
  {
    "question": "You need to create a centralized monitoring dashboard showing metrics from multiple GCP projects. What is the recommended approach?",
    "scenario": null,
    "options": [
      "Use Cloud Monitoring metrics scopes to aggregate metrics from multiple projects into a single dashboard",
      "Export metrics from all projects to BigQuery and build dashboards with Looker Studio",
      "Create separate dashboards per project and link them together",
      "Use Cloud Logging to aggregate logs and create log-based metrics"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud Monitoring metrics scopes allow you to view metrics from multiple projects in a single dashboard. This is the native, purpose-built solution for cross-project monitoring.",
    "domain": "Implementation"
  },
  {
    "question": "Your application deployed across multiple regions needs automatic DNS failover if a region becomes unavailable. What solution provides this?",
    "scenario": null,
    "options": [
      "Use Cloud DNS with health checking and geo-routing policies",
      "Use HTTP(S) Load Balancer with backend services in multiple regions",
      "Configure Cloud CDN with multiple origin servers",
      "Use Cloud Armor with custom routing rules"
    ],
    "correctAnswer": 1,
    "explanation": "HTTP(S) Load Balancer is a global service with automatic health checking and failover. It routes traffic to the closest healthy region automatically without DNS propagation delays.",
    "domain": "Implementation"
  },
  {
    "question": "A batch data processing job runs weekly, processes 5TB of data from Cloud Storage, and takes 2 hours. What compute solution is most cost-effective?",
    "scenario": null,
    "options": [
      "Dataproc cluster with preemptible workers",
      "Dataflow batch pipeline",
      "Cloud Run jobs with maximum timeout",
      "Compute Engine with preemptible VMs and startup scripts"
    ],
    "correctAnswer": 0,
    "explanation": "Dataproc with preemptible workers provides up to 80% cost savings for batch processing and is purpose-built for data processing frameworks. It's ephemeral - created for the job, deleted after.",
    "domain": "Implementation"
  },
  {
    "question": "Your company needs to implement a hub-and-spoke VPC network topology with centralized security controls. What networking architecture should you use?",
    "scenario": null,
    "options": [
      "Create a Shared VPC with a host project for shared resources and service projects for workloads",
      "Use VPC Network Peering to connect all VPCs to a central security VPC",
      "Deploy Network Virtual Appliances in a central VPC and route all traffic through them",
      "Use Cloud Interconnect to route all traffic through on-premises security infrastructure"
    ],
    "correctAnswer": 0,
    "explanation": "Shared VPC provides a hub-and-spoke architecture where the host project contains shared resources (like firewall rules, subnets) and service projects contain workloads. This is the GCP-native pattern.",
    "domain": "Implementation"
  },
  {
    "question": "You need to grant a third-party application access to read data from BigQuery without creating service account keys. The application runs outside of GCP. What authentication method should you use?",
    "scenario": null,
    "options": [
      "Use Workload Identity Federation to allow the external application to authenticate using its native credentials",
      "Create a service account key and provide it to the third-party application",
      "Set up Cloud VPN and use VPC-internal service accounts",
      "Use OAuth 2.0 with user credentials"
    ],
    "correctAnswer": 0,
    "explanation": "Workload Identity Federation allows external applications (AWS, Azure, on-prem) to exchange their credentials for short-lived Google Cloud access tokens, eliminating long-lived keys.",
    "domain": "Implementation"
  },
  {
    "question": "Your application running on Compute Engine instances needs to authenticate to Cloud SQL without managing database passwords. What is the recommended approach?",
    "scenario": null,
    "options": [
      "Use Cloud SQL's IAM database authentication",
      "Store database passwords in Secret Manager and retrieve them at runtime",
      "Use the Cloud SQL Proxy with automatic authentication via instance service accounts",
      "Configure VPC peering and use IP whitelisting instead of authentication"
    ],
    "correctAnswer": 2,
    "explanation": "Cloud SQL Proxy automatically authenticates using the Compute Engine instance's service account, eliminating password management and providing encrypted connections.",
    "domain": "Implementation"
  },
  {
    "question": "You need to implement blue-green deployments for a stateless application on Cloud Run. What approach provides the safest rollout?",
    "scenario": null,
    "options": [
      "Deploy new revision, use traffic splitting to gradually shift traffic from old to new",
      "Deploy new revision and immediately route 100% traffic to it",
      "Use Cloud Run revisions with tags and switch traffic via external load balancer",
      "Deploy to a new Cloud Run service and use Cloud DNS to switch traffic"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud Run's built-in traffic splitting allows gradual migration from old to new revision. You can start with 10% to new revision, monitor, and gradually increase - providing safe rollout with easy rollback.",
    "domain": "Implementation"
  },
  {
    "question": "Your company needs to ensure that all VM instances in production cannot access the internet directly but can still download packages and access GCP APIs. What network configuration should you implement?",
    "scenario": null,
    "options": [
      "Configure Cloud NAT for outbound internet access and use Private Google Access for GCP APIs",
      "Use a proxy server on VMs with external IPs for internet access",
      "Create firewall rules to allow only specific outbound destinations",
      "Use Cloud VPN to route all traffic through an on-premises gateway"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud NAT provides controlled outbound internet access without giving VMs external IPs. Private Google Access allows VMs with only internal IPs to reach Google APIs and services.",
    "domain": "Implementation"
  },
  {
    "question": "A company batch processes data nightly using Cloud Composer. The pipeline fails occasionally due to transient errors. What provides the most reliability?",
    "scenario": null,
    "options": [
      "Cloud Composer (Airflow) with retry logic and failure notifications",
      "Cloud Scheduler triggering Cloud Functions that run the pipeline steps",
      "Cloud Workflows with built-in retry and error handling",
      "Cron jobs on Compute Engine instances running scripts"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud Composer (managed Airflow) is purpose-built for complex data pipelines with dependencies, retries, and monitoring. It's the industry-standard orchestration tool for data engineering.",
    "domain": "Implementation"
  },
  {
    "question": "A financial services company needs to process sensitive customer data in BigQuery while ensuring that certain employees can run analytics queries but never see raw credit card numbers. What is the most appropriate solution?",
    "scenario": null,
    "options": [
      "Use BigQuery column-level security to restrict access to sensitive columns",
      "Create a separate dataset and use authorized views to expose only aggregated data",
      "Use Cloud DLP to automatically redact sensitive data before loading to BigQuery",
      "Implement application-level encryption and store encrypted data in BigQuery"
    ],
    "correctAnswer": 0,
    "explanation": "Column-level security in BigQuery allows you to restrict access to specific columns containing sensitive data while allowing users to query other columns. This is the most direct solution for fine-grained access control.",
    "domain": "Security & Compliance"
  },
  {
    "question": "A healthcare provider needs to run a machine learning pipeline that processes PHI data. The pipeline must be auditable and comply with HIPAA. Which combination of services best meets these requirements?",
    "scenario": null,
    "options": [
      "Vertex AI Pipelines with Cloud Logging and Cloud Audit Logs enabled",
      "Cloud Composer with VPC Service Controls and Access Transparency",
      "Dataflow with CMEK encryption and VPC Service Controls",
      "Cloud Functions triggered by Pub/Sub with Cloud Logging"
    ],
    "correctAnswer": 1,
    "explanation": "Cloud Composer with VPC Service Controls provides strong pipeline orchestration with network security perimeters. Access Transparency gives visibility into Google staff access, critical for HIPAA compliance.",
    "domain": "Security & Compliance"
  },
  {
    "question": "Your application on GKE needs to access Cloud Storage buckets. You want to follow the principle of least privilege without managing service account keys. What is the recommended approach?",
    "scenario": null,
    "options": [
      "Use Workload Identity to bind Kubernetes service accounts to Google service accounts",
      "Create a service account key and store it in a Kubernetes Secret",
      "Assign the necessary IAM roles to the GKE node service account",
      "Use the default Compute Engine service account with Cloud Storage permissions"
    ],
    "correctAnswer": 0,
    "explanation": "Workload Identity is the recommended way to grant GKE pods access to Google Cloud services. It eliminates key management and provides fine-grained access control per pod.",
    "domain": "Security & Compliance"
  },
  {
    "question": "Your company must ensure that no GCP resources are deployed outside of allowed regions (us-central1, us-east1) and that all Cloud Storage buckets have uniform bucket-level access enabled. How do you enforce this at scale?",
    "scenario": null,
    "options": [
      "Use Organization Policy constraints to restrict resource locations and require uniform bucket-level access",
      "Create custom IAM roles that only allow resource creation in specific regions",
      "Use Cloud Asset Inventory to monitor resources and delete non-compliant ones",
      "Implement a CI/CD pipeline that validates Terraform plans before deployment"
    ],
    "correctAnswer": 0,
    "explanation": "Organization Policies provide centralized, enforceable controls. The 'gcp.resourceLocations' constraint restricts resource locations, and storage-specific policies can enforce uniform bucket-level access at creation time.",
    "domain": "Security & Compliance"
  },
  {
    "question": "An application running on GKE needs to make authenticated API calls to an on-premises service that only accepts OAuth 2.0 tokens from a specific identity provider. What is the recommended architecture?",
    "scenario": null,
    "options": [
      "Use Workload Identity Federation to exchange GKE service account tokens for external OAuth tokens",
      "Run an OAuth proxy in GKE that handles token exchange",
      "Store OAuth credentials in Secret Manager and retrieve them from pods",
      "Use Cloud Endpoints to mediate the authentication"
    ],
    "correctAnswer": 0,
    "explanation": "Workload Identity Federation allows GKE workloads to exchange their service account tokens for external OAuth tokens from the required identity provider. This is the managed, secure approach.",
    "domain": "Security & Compliance"
  },
  {
    "question": "You need to provide third-party auditors temporary access to view Cloud Logging logs but not modify any resources. Access should automatically expire after 30 days. What approach should you use?",
    "scenario": null,
    "options": [
      "Create a custom IAM role with logging.logs.list and logging.logEntries.list permissions, grant with a 30-day expiration using IAM conditions",
      "Grant the Logs Viewer role and use a calendar reminder to revoke access after 30 days",
      "Create a temporary service account, grant Logs Viewer role, and delete the account after 30 days",
      "Use Cloud Identity to create temporary external identities with Logs Viewer role"
    ],
    "correctAnswer": 0,
    "explanation": "IAM conditions allow you to set time-based access that automatically expires. This is the most secure and automated approach, eliminating manual intervention and potential errors.",
    "domain": "Security & Compliance"
  },
  {
    "question": "A financial institution needs to demonstrate that Google Cloud engineers have not accessed their data. What GCP feature provides this assurance?",
    "scenario": null,
    "options": [
      "Access Transparency logs",
      "Cloud Audit Logs",
      "VPC Service Controls",
      "Cloud HSM"
    ],
    "correctAnswer": 0,
    "explanation": "Access Transparency provides logs of actions taken by Google staff, including any access to customer data during support cases. This provides the needed assurance for compliance and auditing.",
    "domain": "Security & Compliance"
  },
  {
    "question": "Your microservices application on GKE has services that need to communicate securely. Service A should only accept traffic from Service B. How do you implement this without application-level authentication?",
    "scenario": null,
    "options": [
      "Use Kubernetes NetworkPolicies to restrict traffic between pods based on labels",
      "Use Istio service mesh with mutual TLS and authorization policies",
      "Configure Cloud Armor security policies on the GKE cluster",
      "Use separate namespaces and RBAC to isolate services"
    ],
    "correctAnswer": 1,
    "explanation": "Istio (or Anthos Service Mesh) provides mutual TLS for encrypted service-to-service communication and authorization policies for identity-based access control. This is the recommended pattern for secure microservices.",
    "domain": "Security & Compliance"
  },
  {
    "question": "You need to provide external auditors read-only access to specific Cloud Storage buckets and BigQuery datasets for 90 days. Access should be as restrictive as possible. What approach should you use?",
    "scenario": null,
    "options": [
      "Create a custom IAM role with only necessary permissions, grant to auditor accounts with 90-day IAM condition expiration",
      "Grant Storage Object Viewer and BigQuery Data Viewer roles with manual revocation after 90 days",
      "Create signed URLs for Storage objects and authorized views for BigQuery datasets",
      "Provide temporary service account keys that expire after 90 days"
    ],
    "correctAnswer": 0,
    "explanation": "Custom IAM roles with only required permissions follow least privilege. IAM conditions with time-based expiration automatically revoke access after 90 days without manual intervention.",
    "domain": "Security & Compliance"
  },
  {
    "question": "A financial services application must maintain a complete audit trail of all data access and modifications. The audit trail must be tamper-proof and retained for 10 years. What solution meets these requirements?",
    "scenario": null,
    "options": [
      "Enable Cloud Audit Logs and export to Cloud Storage with retention policy and bucket lock",
      "Use Cloud Logging with extended retention of 10 years",
      "Export audit logs to BigQuery with deletion restrictions",
      "Use Security Command Center to monitor and store audit events"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud Audit Logs capture all access and modifications. Exporting to Cloud Storage with a bucket lock retention policy ensures tamper-proof storage for 10 years at the lowest cost.",
    "domain": "Security & Compliance"
  },
  {
    "question": "An application needs to store user uploaded files that must be immutable after creation. Files should be deleted automatically after 90 days. What Cloud Storage configuration meets these requirements?",
    "scenario": null,
    "options": [
      "Enable bucket lock with retention period of 90 days",
      "Use Object Lifecycle Management to delete objects after 90 days, and enable object versioning with delete protection",
      "Use a retention policy with retention period of 90 days without bucket lock",
      "Enable Object Lifecycle Management to delete after 90 days and use IAM conditions to prevent modifications"
    ],
    "correctAnswer": 2,
    "explanation": "A retention policy ensures objects can't be modified or deleted for the specified period (immutability), and lifecycle management can delete them after 90 days. Bucket lock makes the policy permanent - too strict.",
    "domain": "Security & Compliance"
  },
  {
    "question": "Your company's security policy requires that all VM instances must have disk encryption keys that can be rotated on-demand. What encryption approach meets this requirement?",
    "scenario": null,
    "options": [
      "Use customer-managed encryption keys (CMEK) in Cloud KMS with automatic rotation enabled",
      "Use Google-managed encryption keys with automatic rotation",
      "Use customer-supplied encryption keys (CSEK) that you rotate manually",
      "Enable disk encryption in the VM instance settings"
    ],
    "correctAnswer": 0,
    "explanation": "Customer-managed encryption keys (CMEK) in Cloud KMS allow you to control rotation on-demand while benefiting from managed key infrastructure. Google-managed keys rotate automatically but you can't control timing.",
    "domain": "Security & Compliance"
  },
  {
    "question": "A healthcare application must comply with HIPAA. You need to ensure that PHI data in BigQuery is never accessible to certain roles. What access control mechanism provides the strongest protection?",
    "scenario": null,
    "options": [
      "Use BigQuery column-level security to restrict access to PHI columns based on IAM roles",
      "Encrypt PHI columns using application-level encryption before storing in BigQuery",
      "Use authorized views to expose only de-identified data to certain users",
      "Store PHI in a separate dataset with restrictive IAM policies"
    ],
    "correctAnswer": 1,
    "explanation": "Application-level encryption of PHI before storage ensures that even with database access, users without decryption keys cannot read PHI. This is defense-in-depth beyond IAM controls.",
    "domain": "Security & Compliance"
  },
  {
    "question": "Your company policy requires that all GCP API calls must originate from corporate IP addresses. Developers work from home. How do you enforce this requirement?",
    "scenario": null,
    "options": [
      "Implement VPC Service Controls with ingress policies allowing only corporate IP ranges",
      "Use Cloud Identity-Aware Proxy to control access to GCP resources",
      "Create firewall rules blocking all traffic except from corporate IPs",
      "Use organization policy constraints to restrict API access by IP"
    ],
    "correctAnswer": 0,
    "explanation": "VPC Service Controls with ingress policies can restrict API access to specific IP ranges, enforcing the corporate IP requirement for GCP API calls regardless of where developers work from.",
    "domain": "Security & Compliance"
  },
  {
    "question": "You need to implement least privilege access for a service account that deploys applications to Cloud Run. What permissions should you grant?",
    "scenario": null,
    "options": [
      "Grant the Cloud Run Admin role to the service account",
      "Create a custom role with only run.services.create, run.services.update, and run.services.get permissions",
      "Grant the Editor role scoped to Cloud Run services only",
      "Grant Cloud Run Developer role with IAM condition limiting to specific services"
    ],
    "correctAnswer": 1,
    "explanation": "A custom role with only the specific permissions needed (create, update, get) follows least privilege. Predefined roles like Admin grant unnecessary permissions, violating least privilege.",
    "domain": "Security & Compliance"
  },
  {
    "question": "An application needs to encrypt sensitive data before storing it in Cloud Storage. The encryption keys must be rotated every 90 days. What key management approach should you use?",
    "scenario": null,
    "options": [
      "Use Cloud KMS with automatic key rotation configured for 90 days",
      "Generate keys using Cloud KMS, manually rotate by creating new key versions every 90 days",
      "Use application-generated keys stored in Secret Manager with scheduled rotation",
      "Use customer-supplied encryption keys (CSEK) with manual rotation"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud KMS with automatic key rotation configured for 90 days handles rotation automatically while maintaining access to older versions for decrypting existing data. This is the managed, secure approach.",
    "domain": "Security & Compliance"
  },
  {
    "question": "Your organization requires that all production deployments must be signed and verified. How do you implement this using GCP services?",
    "scenario": null,
    "options": [
      "Use Binary Authorization to require attestations from authorized attestors before deployment",
      "Implement code signing in your CI/CD pipeline with manual verification",
      "Use Cloud Build with protected branches and required reviewers",
      "Store deployment artifacts in Artifact Registry with vulnerability scanning"
    ],
    "correctAnswer": 0,
    "explanation": "Binary Authorization enforces that only signed (attested) container images can be deployed. Attestations are cryptographically signed, providing strong verification of deployment artifacts.",
    "domain": "Security & Compliance"
  },
  {
    "question": "You need to prevent data exfiltration from a GKE cluster to unauthorized external services. What security control should you implement?",
    "scenario": null,
    "options": [
      "Use VPC Service Controls to create a security perimeter around the GKE cluster",
      "Configure egress firewall rules to block traffic to external IPs",
      "Use Kubernetes NetworkPolicies to restrict pod egress traffic",
      "Enable Private GKE cluster with no external IPs"
    ],
    "correctAnswer": 0,
    "explanation": "VPC Service Controls create a security perimeter that prevents data exfiltration even if credentials are compromised. It controls access at the API level, not just network level.",
    "domain": "Security & Compliance"
  },
  {
    "question": "A company operates in a highly regulated industry. They need to ensure sensitive data is never stored in certain geographic regions. What GCP feature enforces this?",
    "scenario": null,
    "options": [
      "Use Organization Policy constraints to restrict resource locations",
      "Configure IAM policies to prevent resource creation in specific regions",
      "Use VPC Service Controls to block access to regional resources",
      "Implement Cloud DLP to detect and block data in unauthorized regions"
    ],
    "correctAnswer": 0,
    "explanation": "Organization Policy constraints, specifically 'gcp.resourceLocations', can restrict where resources can be created, enforcing geographic restrictions at the organizational level preventively.",
    "domain": "Security & Compliance"
  },
  {
    "question": "Your application needs to securely store API keys, database passwords, and certificates. What is the recommended approach?",
    "scenario": null,
    "options": [
      "Store in Secret Manager with IAM permissions controlling access and automatic rotation where supported",
      "Store in Cloud KMS encrypted blobs",
      "Store as environment variables in Cloud Run/GKE configurations",
      "Store in a private Cloud Storage bucket with encryption enabled"
    ],
    "correctAnswer": 0,
    "explanation": "Secret Manager is purpose-built for storing secrets with versioning, audit logging, fine-grained IAM control, and automatic rotation support for certain secret types.",
    "domain": "Security & Compliance"
  },
  {
    "question": "A media company stores 2 PB of video files in Cloud Storage. 90% of files are accessed only in the first 30 days, then rarely accessed. They need to minimize costs while maintaining availability. What storage strategy should they implement?",
    "scenario": null,
    "options": [
      "Use Standard storage class and manually move files to Coldline after 30 days",
      "Create an Object Lifecycle Management policy to transition to Nearline after 30 days, then Archive after 365 days",
      "Use Autoclass to automatically optimize storage classes based on access patterns",
      "Store all data in Archive storage class from the start"
    ],
    "correctAnswer": 2,
    "explanation": "Autoclass automatically moves objects between storage classes based on actual access patterns, minimizing costs without manual intervention or fixed policies. It adapts to changing access patterns.",
    "domain": "Optimization"
  },
  {
    "question": "A data science team needs to train large ML models using GPUs. Training jobs run for 12-48 hours and are fault-tolerant with checkpointing. What compute solution optimizes cost?",
    "scenario": null,
    "options": [
      "Vertex AI Training with standard GPU VMs",
      "GKE with preemptible GPU node pools and job checkpointing",
      "Compute Engine with committed use discounts for GPU VMs",
      "Cloud Run with GPU support (when available)"
    ],
    "correctAnswer": 1,
    "explanation": "GKE with preemptible GPU node pools offers up to 80% cost savings vs standard GPUs. With fault-tolerant jobs and checkpointing, preemption is acceptable, making this the most cost-effective option.",
    "domain": "Optimization"
  },
  {
    "question": "Your application logs contain sensitive customer PII that must not be stored. Logs are sent to Cloud Logging. What is the most cost-effective retention strategy for the application logs you do keep?",
    "scenario": "Application writes 100GB of logs per day to Cloud Logging. Logs must be retained for 7 years for compliance after PII is removed.",
    "options": [
      "Keep all logs in Cloud Logging with extended retention configured",
      "Create a log sink to export logs to Cloud Storage Archive class after 30 days",
      "Export logs to BigQuery for long-term storage and analysis",
      "Use a log sink to export to Cloud Storage Standard class, then use lifecycle policies to transition to Archive"
    ],
    "correctAnswer": 3,
    "explanation": "Exporting logs to Cloud Storage Standard then transitioning to Archive class provides the lowest long-term storage cost while keeping recent logs accessible. Cloud Logging retention is expensive for 7 years.",
    "domain": "Optimization"
  },
  {
    "question": "A retail company runs analytics queries on BigQuery that scan hundreds of terabytes daily. Query costs are exceeding budget. Most queries are exploratory and don't require complete accuracy. How can you reduce costs?",
    "scenario": null,
    "options": [
      "Implement table sampling using TABLESAMPLE clause to query a subset of data",
      "Switch from on-demand to flat-rate pricing for BigQuery",
      "Enable BI Engine for all analytics queries",
      "Create summary tables with pre-aggregated data"
    ],
    "correctAnswer": 0,
    "explanation": "TABLESAMPLE allows querying a random sample of table data, drastically reducing bytes scanned for exploratory queries. For approximate results, this cuts costs significantly without infrastructure changes.",
    "domain": "Optimization"
  },
  {
    "question": "Your application receives traffic from users globally. The backend API is deployed in us-central1. Users in Asia report high latency. What change would most improve global latency?",
    "scenario": null,
    "options": [
      "Deploy backend API to multiple regions and use HTTP(S) Load Balancer with Cloud CDN",
      "Use Cloud CDN with the existing single-region deployment",
      "Enable Premium Network Tier for faster routing",
      "Deploy to a multi-region Cloud Run service"
    ],
    "correctAnswer": 0,
    "explanation": "Deploying to multiple regions close to users and using HTTP(S) Load Balancer routes traffic to the nearest region, dramatically reducing latency for global users. This is the most effective solution.",
    "domain": "Optimization"
  },
  {
    "question": "A development team uses Compute Engine VMs that are only needed during business hours (8 hours/day, 5 days/week). What approach maximizes cost savings?",
    "scenario": null,
    "options": [
      "Use Cloud Scheduler to start VMs in the morning and stop them in the evening automatically",
      "Use preemptible VMs and accept interruptions",
      "Purchase committed use discounts for the VMs",
      "Convert to managed instance groups with autoscaling to zero"
    ],
    "correctAnswer": 0,
    "explanation": "Automatically starting/stopping VMs reduces costs by ~76% (40 hours/week vs 168 hours/week billing). This is more cost-effective than committed use discounts and more reliable than preemptible VMs.",
    "domain": "Optimization"
  },
  {
    "question": "Your Cloud Run service has high cold start latency affecting user experience. The service receives sporadic traffic. What configuration change improves performance while managing costs?",
    "scenario": null,
    "options": [
      "Set minimum instances to 1 to keep one container always warm",
      "Increase CPU and memory allocation to speed up cold starts",
      "Enable startup CPU boost for faster container initialization",
      "Use a larger maximum instances setting"
    ],
    "correctAnswer": 2,
    "explanation": "Startup CPU boost temporarily provides additional CPU during container startup, significantly reducing cold start time without the ongoing cost of minimum instances. This is the most cost-effective performance improvement.",
    "domain": "Optimization"
  },
  {
    "question": "A company has hundreds of Compute Engine VMs running 24/7 with predictable usage. What pricing model provides the best cost savings?",
    "scenario": null,
    "options": [
      "Use sustained use discounts which apply automatically",
      "Purchase 1-year committed use contracts for all VMs",
      "Convert all VMs to preemptible instances",
      "Use sole-tenant nodes for better resource utilization"
    ],
    "correctAnswer": 1,
    "explanation": "Committed use contracts provide up to 57% discount for 1-year or 70% for 3-year commitments for predictable, long-running workloads. This beats sustained use discounts (~30%) for continuous usage.",
    "domain": "Optimization"
  },
  {
    "question": "Your BigQuery queries frequently join a large fact table with smaller dimension tables. Queries are slow. What optimization would most improve performance?",
    "scenario": null,
    "options": [
      "Denormalize the data by pre-joining tables and storing as a single wide table",
      "Partition the fact table and cluster dimension tables",
      "Enable BigQuery BI Engine for faster query execution",
      "Use BigQuery slots reservation for guaranteed performance"
    ],
    "correctAnswer": 0,
    "explanation": "Denormalization eliminates joins by pre-combining tables into a single wide table. While this increases storage, it dramatically improves query performance in BigQuery's columnar storage model.",
    "domain": "Optimization"
  },
  {
    "question": "An e-commerce application experiences high database costs from Cloud SQL. Analysis shows most queries are identical reads for product catalogs. What caching strategy reduces costs most effectively?",
    "scenario": null,
    "options": [
      "Implement Cloud Memorystore (Redis) as a cache layer in front of Cloud SQL",
      "Enable Cloud SQL query insights and optimize slow queries",
      "Increase Cloud SQL instance size to handle more queries",
      "Create read replicas to distribute read load"
    ],
    "correctAnswer": 0,
    "explanation": "Memorystore (Redis) caching of frequently read data dramatically reduces database load and costs. For read-heavy workloads with identical queries, caching provides the best cost-performance improvement.",
    "domain": "Optimization"
  },
  {
    "question": "Your organization has multiple GCP projects with redundant Cloud Logging sinks exporting the same data. How can you optimize logging costs?",
    "scenario": null,
    "options": [
      "Consolidate log sinks at the organization level instead of per-project sinks",
      "Use exclusion filters to prevent duplicate log entries",
      "Reduce log retention periods across all projects",
      "Export logs to a cheaper storage class immediately"
    ],
    "correctAnswer": 0,
    "explanation": "Organization-level log sinks eliminate redundancy by aggregating logs once for all projects, reducing both ingestion costs and complexity. This is more efficient than multiple per-project sinks.",
    "domain": "Optimization"
  },
  {
    "question": "A gaming company runs game servers on Compute Engine with highly variable player counts. What autoscaling configuration optimizes cost while ensuring performance?",
    "scenario": null,
    "options": [
      "Use managed instance groups with autoscaling based on CPU utilization and scale-in delay to prevent thrashing",
      "Use preemptible VMs with aggressive autoscaling policies",
      "Set autoscaling to maintain 50% average CPU utilization",
      "Use committed use discounts for baseline capacity plus on-demand for spikes"
    ],
    "correctAnswer": 3,
    "explanation": "Committed use discounts for predictable baseline load (lowest player count) plus on-demand autoscaling for spikes provides the best balance of cost savings and performance for variable workloads.",
    "domain": "Optimization"
  },
  {
    "question": "Your Cloud Storage buckets contain objects with high retrieval costs due to frequent access of Nearline and Coldline objects. What should you do?",
    "scenario": null,
    "options": [
      "Use Autoclass to automatically move frequently accessed objects to Standard class",
      "Manually move frequently accessed objects to Standard storage",
      "Keep all data in Standard class to avoid retrieval fees",
      "Use Cloud CDN to cache frequently accessed objects"
    ],
    "correctAnswer": 0,
    "explanation": "Autoclass automatically promotes frequently accessed objects to Standard class (no retrieval fees) and demotes rarely accessed objects to cheaper classes. This optimizes costs without manual intervention.",
    "domain": "Optimization"
  },
  {
    "question": "A data pipeline processes files from Cloud Storage. Processing is CPU-intensive and files arrive sporadically throughout the day. What compute approach minimizes costs?",
    "scenario": null,
    "options": [
      "Use Cloud Functions triggered by object creation for serverless processing",
      "Run a Compute Engine VM 24/7 polling Cloud Storage for new files",
      "Use Cloud Run jobs triggered by Pub/Sub messages from Storage notifications",
      "Use Dataflow with autoscaling configured to scale to zero"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud Functions scale to zero when idle and charge per-invocation, ideal for sporadic file processing. No infrastructure runs when there are no files to process, minimizing costs.",
    "domain": "Optimization"
  },
  {
    "question": "Your company wants to reduce network egress costs for serving content to users. Most users are in North America and Europe. What architecture minimizes egress costs?",
    "scenario": null,
    "options": [
      "Use Cloud CDN to cache content at edge locations near users",
      "Deploy application servers in multiple regions close to users",
      "Use Premium Network Tier for better routing",
      "Store content in multi-region Cloud Storage buckets"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud CDN caches content at Google edge locations globally, serving content from locations near users without egress from your origin. This dramatically reduces egress costs for cacheable content.",
    "domain": "Optimization"
  },
  {
    "question": "You need to deploy a new version of your application to production with zero downtime. The application runs on GKE with 20 replicas. The new version has database schema changes that are backward-compatible. What deployment strategy minimizes risk?",
    "scenario": null,
    "options": [
      "Blue-green deployment: Create new deployment, switch service selector when ready",
      "Rolling update with maxSurge=5 and maxUnavailable=0",
      "Canary deployment: Route 10% traffic to new version, monitor, then gradually increase",
      "Recreate deployment: Delete old pods, then create new ones"
    ],
    "correctAnswer": 2,
    "explanation": "Canary deployment minimizes risk by exposing only a small percentage of traffic to the new version while monitoring. If issues occur, impact is limited and rollback is immediate.",
    "domain": "Reliability"
  },
  {
    "question": "You need to implement a disaster recovery solution for a Cloud SQL PostgreSQL instance. RPO must be 1 hour and RTO must be 4 hours. What is the most cost-effective solution?",
    "scenario": null,
    "options": [
      "Enable automated backups and create read replicas in a different region",
      "Enable automated backups and use point-in-time recovery when needed",
      "Use Cloud SQL replication to a standby instance in another region with automatic failover",
      "Export database to Cloud Storage every hour using Cloud Scheduler"
    ],
    "correctAnswer": 1,
    "explanation": "Automated backups with point-in-time recovery meet the RPO (1 hour) and RTO (4 hours) requirements at the lowest cost. Automated backups occur continuously with WAL archiving.",
    "domain": "Reliability"
  },
  {
    "question": "Your application deployed across multiple regions needs a global IP address with automatic failover if a region becomes unavailable. What load balancing solution should you use?",
    "scenario": null,
    "options": [
      "HTTP(S) Load Balancer with backend services in multiple regions and Cloud CDN",
      "Network Load Balancer with forwarding rules in multiple regions",
      "TCP Proxy Load Balancer with backend services in multiple regions",
      "Cloud DNS with geolocation-based routing to regional load balancers"
    ],
    "correctAnswer": 0,
    "explanation": "HTTP(S) Load Balancer is a global service with a single anycast IP that automatically routes traffic to the closest healthy region. It provides automatic failover without DNS propagation delays.",
    "domain": "Reliability"
  },
  {
    "question": "A critical application requires 99.95% availability. It's currently deployed in a single zone. What architecture change best improves availability?",
    "scenario": null,
    "options": [
      "Deploy across multiple zones in the same region with load balancing",
      "Deploy across multiple regions with global load balancing",
      "Add more replicas in the same zone",
      "Use preemptible instances with automatic restart"
    ],
    "correctAnswer": 0,
    "explanation": "Multi-zone deployment within a region protects against zone failures (the most common type of failure) and achieves 99.95% SLA. Multi-region is more expensive and complex, providing higher availability than required.",
    "domain": "Reliability"
  },
  {
    "question": "Your application experiences intermittent failures when calling a third-party API. What pattern should you implement to improve reliability?",
    "scenario": null,
    "options": [
      "Implement exponential backoff with jitter for retries",
      "Increase timeout values for API calls",
      "Cache all API responses indefinitely",
      "Call the API multiple times in parallel and use the first successful response"
    ],
    "correctAnswer": 0,
    "explanation": "Exponential backoff with jitter prevents overwhelming the failing service and reduces thundering herd problems. This is the industry-standard pattern for handling transient failures in distributed systems.",
    "domain": "Reliability"
  },
  {
    "question": "A stateful application on GKE stores session data in pod memory. Pods are frequently rescheduled. How can you ensure session data persists across pod restarts?",
    "scenario": null,
    "options": [
      "Use persistent volumes to store session data",
      "Store session data in Cloud Memorystore (Redis)",
      "Enable pod affinity to keep sessions on the same pod",
      "Use local SSDs for faster session data access"
    ],
    "correctAnswer": 1,
    "explanation": "Cloud Memorystore (Redis) is designed for session data storage with high availability, fast access, and persistence across pod lifecycles. It decouples session data from pod lifecycle.",
    "domain": "Reliability"
  },
  {
    "question": "Your Cloud Run service occasionally experiences 500 errors during traffic spikes. What is the most likely cause and solution?",
    "scenario": null,
    "options": [
      "Container memory limit too low - increase memory allocation",
      "Too few maximum instances - increase max instances setting",
      "Cold starts causing timeouts - set minimum instances",
      "Request timeout too short - increase timeout value"
    ],
    "correctAnswer": 1,
    "explanation": "500 errors during spikes typically indicate Cloud Run can't scale fast enough. Increasing max instances allows more concurrent containers to handle sudden traffic increases.",
    "domain": "Reliability"
  },
  {
    "question": "You need to ensure your application can handle a sudden 10x traffic increase. The application is on GKE. What should you configure?",
    "scenario": null,
    "options": [
      "Configure Horizontal Pod Autoscaler (HPA) with appropriate CPU/memory thresholds and ensure cluster autoscaler is enabled",
      "Pre-scale the cluster to 10x normal capacity",
      "Use preemptible nodes for cost-effective scaling",
      "Configure vertical pod autoscaler to increase resource limits"
    ],
    "correctAnswer": 0,
    "explanation": "HPA scales pods based on metrics, and cluster autoscaler adds nodes when needed. Together they handle traffic spikes automatically without over-provisioning.",
    "domain": "Reliability"
  },
  {
    "question": "A batch processing job fails occasionally due to transient errors in downstream services. What pattern ensures the job completes successfully?",
    "scenario": null,
    "options": [
      "Implement idempotent operations with automatic retry logic and dead-letter queuing for persistent failures",
      "Increase job timeout values",
      "Run multiple instances of the job in parallel",
      "Schedule the job to run more frequently with smaller batches"
    ],
    "correctAnswer": 0,
    "explanation": "Idempotent operations allow safe retries, automatic retry handles transient errors, and dead-letter queuing captures persistent failures for investigation - this is the complete reliability pattern.",
    "domain": "Reliability"
  },
  {
    "question": "Your application uses Cloud SQL. During a regional outage, you need to failover to a different region with minimal data loss. What configuration ensures this?",
    "scenario": null,
    "options": [
      "Configure Cloud SQL with high availability (HA) in the primary region and a cross-region read replica for disaster recovery",
      "Use automated backups only",
      "Configure cross-region replication with automatic failover",
      "Maintain two separate Cloud SQL instances and sync them at the application level"
    ],
    "correctAnswer": 0,
    "explanation": "HA configuration protects against zone failures in the primary region. Cross-region read replica can be promoted to master during regional outages, providing disaster recovery with minimal data loss (RPO of seconds).",
    "domain": "Reliability"
  },
  {
    "question": "A data science team needs to train a custom image classification model using their labeled dataset of 50,000 images. They want minimal code and infrastructure management. What is the most appropriate solution?",
    "scenario": null,
    "options": [
      "Use Vertex AI AutoML Vision to train the model with their labeled images",
      "Build a custom TensorFlow model and train on Vertex AI Training with GPUs",
      "Use Cloud Vision API pre-trained models",
      "Deploy Jupyter notebooks on Compute Engine with attached GPUs and train manually"
    ],
    "correctAnswer": 0,
    "explanation": "Vertex AI AutoML Vision is designed for this exact use case - custom image classification with labeled data and minimal code. It handles infrastructure, hyperparameter tuning, and model optimization automatically. Custom TensorFlow (B) requires more ML expertise. Cloud Vision API (C) only offers pre-trained models. Manual training (D) requires significant infrastructure management.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "You need to deploy a trained ML model that serves predictions with sub-100ms latency and handles variable traffic (10-1000 requests/second). The model is 500MB. What deployment strategy should you use?",
    "scenario": null,
    "options": [
      "Deploy to Vertex AI Prediction with autoscaling and use dedicated machine types for consistent latency",
      "Deploy as a containerized service on Cloud Run with minimum instances set to handle peak load",
      "Deploy to App Engine Flexible with manual scaling",
      "Create a custom prediction service on GKE with GPU nodes"
    ],
    "correctAnswer": 0,
    "explanation": "Vertex AI Prediction is purpose-built for ML model serving with features like autoscaling, model versioning, and optimized serving infrastructure. It handles the 500MB model size well and provides sub-100ms latency with appropriate machine types. Cloud Run (B) has cold start issues for large models. App Engine (C) isn't optimized for ML serving. Custom GKE (D) requires significant operational overhead.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "A company wants to build a recommendation system using their historical customer data in BigQuery. They have limited ML expertise. What approach minimizes development time?",
    "scenario": null,
    "options": [
      "Use BigQuery ML to train recommendation models directly on data in BigQuery using SQL",
      "Export data to Cloud Storage and use Vertex AI AutoML Tables",
      "Use Recommendations AI, a managed recommendation service",
      "Build a custom collaborative filtering model with TensorFlow on Vertex AI"
    ],
    "correctAnswer": 2,
    "explanation": "Recommendations AI is a fully managed service specifically designed for building recommendation systems with minimal ML expertise. It's the fastest path to production. BigQuery ML (A) requires some SQL/ML knowledge and may not have specialized recommendation algorithms. AutoML Tables (B) is general-purpose, not optimized for recommendations. Custom TensorFlow (D) requires significant ML expertise.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "You're building an ML pipeline that needs to: preprocess data from BigQuery, train a model, evaluate it, and deploy if accuracy exceeds 90%. What service orchestrates this workflow?",
    "scenario": null,
    "options": [
      "Use Vertex AI Pipelines to create a managed ML workflow with conditional deployment",
      "Use Cloud Composer (Airflow) to orchestrate custom ML training scripts",
      "Use Cloud Functions triggered in sequence by Pub/Sub messages",
      "Write a custom Python script that executes each step sequentially"
    ],
    "correctAnswer": 0,
    "explanation": "Vertex AI Pipelines is purpose-built for ML workflows with native integration to Vertex AI services, conditional logic, and automated model deployment. It's the managed, ML-optimized solution. Cloud Composer (B) works but isn't ML-optimized. Cloud Functions (C) is fragile for complex workflows. Custom scripts (D) lack workflow management, retry logic, and monitoring.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "A research team needs to fine-tune a large language model (LLM) with 70B parameters. They need access to high-performance accelerators and distributed training. What infrastructure should they use?",
    "scenario": null,
    "options": [
      "Use Vertex AI Training with A2 VMs and multiple A100 GPUs configured for distributed training",
      "Use standard Compute Engine instances with attached GPUs",
      "Use Cloud TPU Pods for massive parallel training capacity",
      "Use Vertex AI Workbench and scale up to larger instances as needed"
    ],
    "correctAnswer": 2,
    "explanation": "Cloud TPU Pods are specifically designed for training very large models with 70B+ parameters. They provide massive parallel training capacity and are optimized for LLM workloads. A2 VMs with A100s (A) work but TPUs are more cost-effective and performant for this scale. Standard VMs (B) lack the specialized interconnect for distributed training. Workbench (D) is for development, not large-scale training.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "You need to perform feature engineering on 10TB of data in BigQuery before training an ML model. The transformations need to be reusable for both training and serving. What is the recommended approach?",
    "scenario": null,
    "options": [
      "Use Dataflow with Apache Beam and TensorFlow Transform (TFT) to create reusable feature transformations",
      "Write SQL transformations in BigQuery and save as views",
      "Use Vertex AI Feature Store to manage and serve features",
      "Create Pandas transformation scripts and run them in Vertex AI Pipelines"
    ],
    "correctAnswer": 0,
    "explanation": "Dataflow with TensorFlow Transform (TFT) is designed for scalable, reusable feature engineering that works consistently in both training and serving. It handles 10TB efficiently and ensures training/serving skew is avoided. BigQuery views (B) don't address serving-time transformations. Feature Store (C) stores features but doesn't create them. Pandas (D) doesn't scale to 10TB.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "A model trained on customer data shows degrading performance over time. You need to detect when to retrain. What monitoring strategy should you implement?",
    "scenario": null,
    "options": [
      "Use Vertex AI Model Monitoring to detect prediction drift and feature skew automatically",
      "Set up Cloud Monitoring alerts on prediction latency",
      "Periodically evaluate the model on a held-out test set and compare accuracy",
      "Monitor the number of prediction requests per day"
    ],
    "correctAnswer": 0,
    "explanation": "Vertex AI Model Monitoring automatically detects prediction drift (changes in model outputs) and feature skew (changes in input data distribution), which indicate when retraining is needed. Latency monitoring (B) doesn't detect model degradation. Manual evaluation (C) is not continuous. Request volume (D) doesn't indicate model quality.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "You're deploying multiple versions of an ML model (v1, v2, v3) and want to gradually shift traffic from v1 to v2 while keeping v3 for A/B testing 10% of traffic. What Vertex AI feature supports this?",
    "scenario": null,
    "options": [
      "Use Vertex AI Prediction traffic splitting to route percentages to different model versions",
      "Deploy each version as a separate endpoint and use Cloud Load Balancing for traffic distribution",
      "Use Cloud Run revisions with traffic splitting",
      "Deploy all versions and use application-level routing logic"
    ],
    "correctAnswer": 0,
    "explanation": "Vertex AI Prediction has built-in traffic splitting that allows routing different percentages of traffic to different model versions deployed on the same endpoint. This is the native, managed solution for gradual rollouts and A/B testing. External load balancing (B) adds unnecessary complexity. Cloud Run (C) isn't optimized for ML serving. Application logic (D) is fragile and requires code changes.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "A team needs to share ML features across multiple models and ensure consistency between training and serving. Features are computed from real-time streaming data and batch data. What architecture should they use?",
    "scenario": null,
    "options": [
      "Use Vertex AI Feature Store with both batch ingestion from BigQuery and streaming ingestion from Pub/Sub",
      "Store features in BigQuery and query during training and serving",
      "Use Cloud Memorystore to cache computed features",
      "Compute features on-demand during both training and serving"
    ],
    "correctAnswer": 0,
    "explanation": "Vertex AI Feature Store is designed for exactly this use case - centralized feature management with support for both batch and streaming ingestion, feature sharing across models, and consistent training/serving. BigQuery (B) doesn't handle real-time serving well. Memorystore (C) doesn't provide feature versioning and lineage. On-demand computation (D) causes training/serving skew.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "You need to explain individual predictions from your deployed ML model to meet regulatory requirements. The model is a complex neural network. What should you implement?",
    "scenario": null,
    "options": [
      "Use Vertex AI Explainable AI to generate feature attribution explanations for each prediction",
      "Log all input features and output predictions for manual review",
      "Replace the neural network with a simpler, interpretable model like logistic regression",
      "Create a separate explanation model that approximates the neural network's behavior"
    ],
    "correctAnswer": 0,
    "explanation": "Vertex AI Explainable AI provides built-in feature attribution methods (like Integrated Gradients, XRAI) that explain individual predictions from complex models without sacrificing accuracy. Manual review (B) doesn't provide explanations. Replacing with simpler models (C) may significantly reduce accuracy. Separate explanation models (D) add complexity and may not be accurate.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "A financial services company needs to train models on sensitive customer data that cannot leave their VPC. What Vertex AI configuration ensures this?",
    "scenario": null,
    "options": [
      "Use Vertex AI with VPC Service Controls to create a security perimeter preventing data exfiltration",
      "Enable customer-managed encryption keys (CMEK) for all Vertex AI resources",
      "Use Private Google Access to access Vertex AI APIs from VMs without external IPs",
      "Deploy all training workloads on Compute Engine within the VPC instead of using Vertex AI"
    ],
    "correctAnswer": 0,
    "explanation": "VPC Service Controls create a security perimeter around Vertex AI resources, preventing data from leaving the VPC even if credentials are compromised. This is the strongest protection. CMEK (B) encrypts data at rest but doesn't prevent exfiltration. Private Google Access (C) secures API access but not data. Avoiding Vertex AI (D) loses managed ML capabilities unnecessarily.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "You're migrating ML workloads from on-premises to GCP. The existing workflow uses Kubeflow Pipelines on Kubernetes. What is the most compatible GCP service?",
    "scenario": null,
    "options": [
      "Use Vertex AI Pipelines, which is based on Kubeflow Pipelines and supports migration of existing pipelines",
      "Deploy Kubeflow Pipelines manually on GKE",
      "Rewrite all pipelines using Cloud Composer (Airflow)",
      "Use Cloud Functions to replicate the pipeline logic"
    ],
    "correctAnswer": 0,
    "explanation": "Vertex AI Pipelines is built on Kubeflow Pipelines and provides a managed, compatible service that can run existing Kubeflow pipelines with minimal changes. It adds GCP-native integrations and management. Manual GKE deployment (B) works but adds operational overhead. Rewriting to Airflow (C) is unnecessary work. Cloud Functions (D) aren't suitable for complex ML pipelines.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "A model needs to process images uploaded to Cloud Storage, perform inference, and store results in BigQuery. This should happen automatically for each upload. What architecture is most appropriate?",
    "scenario": null,
    "options": [
      "Use Cloud Storage object notifications to trigger Pub/Sub, Cloud Functions to call Vertex AI Prediction, write results to BigQuery",
      "Use Cloud Storage FUSE to mount the bucket to a VM running continuous inference",
      "Set up a cron job that periodically checks for new images and processes them",
      "Use Vertex AI Batch Prediction triggered manually when images are uploaded"
    ],
    "correctAnswer": 0,
    "explanation": "Storage notifications \u2192 Pub/Sub \u2192 Cloud Functions \u2192 Vertex AI Prediction \u2192 BigQuery is the event-driven, serverless pattern that scales automatically and processes images immediately upon upload. FUSE mounting (B) is inefficient and requires persistent VMs. Cron jobs (C) add latency. Manual batch prediction (D) defeats the purpose of automation.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "You need to serve predictions from a TensorFlow SavedModel with custom preprocessing logic that requires specific Python libraries. What deployment approach supports this?",
    "scenario": null,
    "options": [
      "Create a custom prediction container with your preprocessing code and model, deploy to Vertex AI Prediction",
      "Use Vertex AI Prediction with pre-built TensorFlow containers and include preprocessing in the model graph",
      "Deploy the model to Cloud Run with a custom container",
      "Use Vertex AI Workbench to serve predictions via notebook endpoints"
    ],
    "correctAnswer": 0,
    "explanation": "Vertex AI Prediction supports custom containers, allowing you to package your model with custom preprocessing code and dependencies. This is the managed, production-ready approach. Including preprocessing in the model graph (B) isn't always possible with complex Python libraries. Cloud Run (C) works but lacks ML-specific features like A/B testing and monitoring. Workbench (D) isn't designed for production serving.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "A recommendation model needs to update in real-time as users interact with the website. The model should learn from user behavior within seconds. What architecture enables online learning?",
    "scenario": null,
    "options": [
      "Stream user interactions to Pub/Sub, use Dataflow for feature extraction, update model weights in Vertex AI with incremental training",
      "Use Recommendations AI which supports real-time learning from user events",
      "Batch retrain the model every hour using the latest interaction data",
      "Use BigQuery ML with scheduled queries to retrain the model periodically"
    ],
    "correctAnswer": 1,
    "explanation": "Recommendations AI is specifically designed for this use case with built-in support for real-time learning from user events. It updates recommendations within seconds based on user behavior. Custom incremental training (A) is complex to implement correctly. Hourly retraining (C) isn't real-time. Scheduled queries (D) have too much latency.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "Your team manages GCP infrastructure with Terraform. Multiple team members need to apply changes. What configuration ensures consistent state and prevents conflicts?",
    "scenario": null,
    "options": [
      "Use a Cloud Storage bucket as the Terraform backend with state locking enabled",
      "Store terraform.tfstate in a Git repository and use pull requests for changes",
      "Each team member maintains their own local state file",
      "Use Terraform Cloud to manage state remotely"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud Storage backend with state locking prevents concurrent modifications and ensures consistent state across the team. This is the GCP-native solution. Git storage (B) doesn't provide locking and can cause state conflicts. Local state (C) leads to drift and conflicts. Terraform Cloud (D) works but Cloud Storage is simpler for GCP-only infrastructure.",
    "domain": "Infrastructure as Code"
  },
  {
    "question": "You need to create identical GCP environments (dev, staging, production) with different resource sizes and configurations. What Terraform feature best accomplishes this?",
    "scenario": null,
    "options": [
      "Use Terraform workspaces to manage multiple environments with the same configuration",
      "Create separate Terraform modules for each environment with parameterized variables",
      "Duplicate the Terraform code in separate directories for each environment",
      "Use Terraform's count and for_each to create multiple environments"
    ],
    "correctAnswer": 1,
    "explanation": "Terraform modules with parameterized variables allow you to define infrastructure once and instantiate it multiple times with different configurations. This is DRY (Don't Repeat Yourself) and maintainable. Workspaces (A) are good for state separation but less flexible for different configurations. Duplication (C) violates DRY. Count/for_each (D) is for creating multiple resources within one environment.",
    "domain": "Infrastructure as Code"
  },
  {
    "question": "Your Terraform configuration creates a VPC, subnets, and Compute Engine instances. The instances must be created after the network is ready. How do you ensure proper ordering?",
    "scenario": null,
    "options": [
      "Use depends_on to explicitly declare dependencies between resources",
      "Terraform automatically determines resource dependencies from references",
      "Run terraform apply multiple times until all resources are created",
      "Create the resources in separate Terraform files and apply them in order"
    ],
    "correctAnswer": 1,
    "explanation": "Terraform automatically builds a dependency graph by analyzing resource references. If instances reference the VPC/subnet, Terraform creates them in the correct order. This is implicit and preferred. depends_on (A) is only needed for dependencies that Terraform can't infer. Multiple applies (C) is inefficient. Separate files (D) adds unnecessary complexity.",
    "domain": "Infrastructure as Code"
  },
  {
    "question": "You want to ensure Terraform changes are reviewed before applying to production. The review should include a preview of what will change. What workflow should you implement?",
    "scenario": null,
    "options": [
      "Run terraform plan, save the output, require approval, then run terraform apply with the saved plan",
      "Run terraform apply with -auto-approve and review changes in Cloud Audit Logs afterwards",
      "Use terraform validate to check configuration before applying",
      "Store Terraform configurations in Git with required pull request reviews"
    ],
    "correctAnswer": 0,
    "explanation": "Terraform plan generates a preview of changes, saving it ensures the approved changes are exactly what gets applied. This is the proper review workflow. Auto-approve (B) defeats the purpose of review. Validate (C) only checks syntax, not intended changes. Git reviews (D) are good but should be combined with terraform plan review.",
    "domain": "Infrastructure as Code"
  },
  {
    "question": "Your Terraform configuration needs to reference the project ID in multiple places. What is the best practice for managing this value?",
    "scenario": null,
    "options": [
      "Define the project ID as a variable with a default value or pass it via terraform.tfvars",
      "Hard-code the project ID in each resource",
      "Use a data source to dynamically query the project ID",
      "Set it as an environment variable TF_VAR_project_id"
    ],
    "correctAnswer": 0,
    "explanation": "Terraform variables make values reusable and configurable. Using terraform.tfvars or variable defaults is the standard practice. Hard-coding (B) makes code inflexible. Data sources (C) are for external data, not configuration values. Environment variables (D) work but are less visible and harder to manage than explicit variables.",
    "domain": "Infrastructure as Code"
  },
  {
    "question": "You need to import an existing manually-created GCP resource into Terraform management. What process should you follow?",
    "scenario": null,
    "options": [
      "Write the Terraform configuration for the resource, then use terraform import with the resource ID",
      "Use terraform import without configuration, then Terraform will generate the config automatically",
      "Delete and recreate the resource using Terraform",
      "Use gcloud to export the resource configuration to Terraform format"
    ],
    "correctAnswer": 0,
    "explanation": "Terraform import requires you to write the configuration first (defining the resource block), then import maps the existing GCP resource to that Terraform resource. Import doesn't generate configuration automatically (B). Deleting and recreating (C) causes downtime. gcloud doesn't export to Terraform format (D).",
    "domain": "Infrastructure as Code"
  },
  {
    "question": "Your Terraform configuration contains sensitive values like database passwords. How should you manage these securely?",
    "scenario": null,
    "options": [
      "Use Terraform variables marked as sensitive, store actual values in Secret Manager, reference them via data sources",
      "Store passwords in terraform.tfvars and add it to .gitignore",
      "Use environment variables for all sensitive values",
      "Encrypt the entire Terraform state file with a password"
    ],
    "correctAnswer": 0,
    "explanation": "Secret Manager is the secure, centralized solution for sensitive data. Terraform can read secrets via data sources. Marking variables as sensitive prevents them from appearing in logs. tfvars with .gitignore (B) protects source control but not state files. Environment variables (C) are better than hard-coding but not as secure as Secret Manager. Encrypted state (D) is complex and error-prone.",
    "domain": "Infrastructure as Code"
  },
  {
    "question": "You need to extend your on-premises Active Directory authentication to GCP resources. Users should authenticate once and access both on-premises and cloud resources. What solution should you implement?",
    "scenario": null,
    "options": [
      "Use Google Cloud Directory Sync to synchronize users to Cloud Identity, then federate with on-premises AD",
      "Manually create duplicate user accounts in Cloud Identity",
      "Deploy an Active Directory domain controller on Compute Engine",
      "Use Cloud VPN to allow direct authentication to on-premises AD from GCP"
    ],
    "correctAnswer": 0,
    "explanation": "Google Cloud Directory Sync (GCDS) synchronizes users from on-premises AD to Cloud Identity, and federation allows single sign-on across both environments. This is the managed, recommended approach. Duplicate accounts (B) break single sign-on. VM-based AD (C) requires management and doesn't integrate with Cloud Identity. Direct VPN authentication (D) doesn't provide proper cloud identity management.",
    "domain": "Hybrid & Multicloud"
  },
  {
    "question": "A company has workloads in both GCP and AWS. They need a unified way to manage Kubernetes clusters across both clouds. What approach provides consistent management?",
    "scenario": null,
    "options": [
      "Use Anthos to manage and deploy applications consistently across GKE and AWS EKS",
      "Use separate management tools for each cloud (GKE Console and AWS EKS Console)",
      "Deploy Kubernetes manually on VMs in both clouds",
      "Use Terraform to provision clusters in both environments"
    ],
    "correctAnswer": 0,
    "explanation": "Anthos provides unified management, policy enforcement, and service mesh across GKE, EKS, and on-premises Kubernetes clusters. This is Google's multi-cloud Kubernetes solution. Separate tools (B) create management silos. Manual deployment (C) adds operational burden. Terraform (D) provisions infrastructure but doesn't provide runtime management and policy enforcement.",
    "domain": "Hybrid & Multicloud"
  },
  {
    "question": "Your company needs to process data that must remain on-premises for regulatory reasons, but wants to use GCP's BigQuery for analytics. What architecture enables this?",
    "scenario": null,
    "options": [
      "Use BigQuery Omni to analyze data in AWS S3 or Azure Blob Storage without moving it to GCP",
      "Use Cloud VPN to allow BigQuery to query on-premises databases directly",
      "Replicate data to GCP with encryption in transit and at rest",
      "Use Anthos to run BigQuery on-premises"
    ],
    "correctAnswer": 0,
    "explanation": "BigQuery Omni allows you to analyze data where it lives (AWS, Azure, or on-prem via supported storage) without moving it to GCP. This addresses data residency requirements. VPN for direct queries (B) isn't supported. Replication (C) violates the requirement to keep data on-premises. Anthos doesn't run BigQuery (D).",
    "domain": "Hybrid & Multicloud"
  },
  {
    "question": "You're migrating applications from on-premises to GCP over 12 months. During migration, some services will run on-premises, others in GCP. They need low-latency, high-bandwidth connectivity. What solution is most appropriate?",
    "scenario": null,
    "options": [
      "Use Dedicated Interconnect or Partner Interconnect for high-bandwidth private connectivity",
      "Set up Cloud VPN tunnels for encrypted connectivity",
      "Use public internet with Cloud NAT",
      "Deploy Direct Peering for Google Workspace and GCP access"
    ],
    "correctAnswer": 0,
    "explanation": "Dedicated/Partner Interconnect provides high-bandwidth (10-100 Gbps), low-latency, private connectivity ideal for hybrid scenarios with significant data transfer. Cloud VPN (B) has lower bandwidth and higher latency. Public internet (C) is insecure and unreliable. Direct Peering (D) is for accessing Google services, not private VPC resources.",
    "domain": "Hybrid & Multicloud"
  },
  {
    "question": "A global company wants to run applications close to users in multiple clouds and on-premises locations while maintaining consistent security policies. What Google solution provides this?",
    "scenario": null,
    "options": [
      "Use Anthos for multi-cloud and on-premises application deployment with centralized policy management",
      "Deploy applications separately in each environment with local management",
      "Use Cloud Run in multiple GCP regions only",
      "Use Terraform to deploy identical infrastructure in each cloud"
    ],
    "correctAnswer": 0,
    "explanation": "Anthos provides consistent application deployment, configuration management, and security policy enforcement across GCP, AWS, Azure, and on-premises. This is exactly what it's designed for. Separate deployment (B) creates management complexity and inconsistent policies. Cloud Run (C) is GCP-only. Terraform (D) provisions infrastructure but doesn't manage runtime policies and applications.",
    "domain": "Hybrid & Multicloud"
  },
  {
    "question": "Altostrat wants to enable 24/7 natural language user support and personalized content recommendations. Which combination of Google Cloud services best addresses these requirements?",
    "caseStudy": "Company Overview: Altostrat is a prominent media company with a vast library of audio and video content including podcasts, interviews, news, and documentaries.\n\nExisting Environment: GKE for scalability, Cloud Storage for media library, BigQuery as data warehouse, Cloud Run functions for serverless event-driven tasks. Legacy on-premises systems for content ingestion and archival. Google Identity + third-party IdPs. Cloud Monitoring + Prometheus for observability.\n\nBusiness Requirements: Accelerate operational workflows, simplify infrastructure management, optimize cloud storage costs, enable 24/7 natural language user support, auto-generate content summaries, extract metadata using NLP/computer vision, detect inappropriate content, analyze content for trends.\n\nTechnical Requirements: Modernize CI/CD for containerized deployments, secure high-performance hybrid cloud connectivity, scalable Kubernetes on-prem and cloud, optimize storage costs, AI-powered harmful content detection, auditable/explainable AI, LLMs for personalized experiences, advanced chatbots with NLU.",
    "caseStudyName": "Altostrat Media",
    "options": [
      "Vertex AI Agent Builder for conversational AI and Vertex AI with Gemini for personalized recommendations",
      "Cloud Run functions with custom NLP logic and BigQuery ML for recommendations",
      "Dialogflow CX for chatbots and AutoML for recommendation models",
      "Contact Center AI and Cloud Vision API for content analysis"
    ],
    "correctAnswer": 0,
    "explanation": "Vertex AI Agent Builder provides managed conversational AI with LLM backing for 24/7 support, while Vertex AI with Gemini handles personalized recommendations at scale. This directly addresses Altostrat's requirements for natural language interaction and personalized experiences using Google Cloud's generative AI - which is the stated strategic direction. Dialogflow CX (C) is older and less capable than Agent Builder for this use case.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "Altostrat needs to detect and filter inappropriate content from their media library automatically. Their AI decisions must be auditable and explainable. Which approach satisfies both requirements?",
    "caseStudy": "Company Overview: Altostrat is a prominent media company with a vast library of audio and video content including podcasts, interviews, news, and documentaries.\n\nExisting Environment: GKE for scalability, Cloud Storage for media library, BigQuery as data warehouse, Cloud Run functions for serverless event-driven tasks. Legacy on-premises systems for content ingestion and archival. Google Identity + third-party IdPs. Cloud Monitoring + Prometheus for observability.\n\nBusiness Requirements: Accelerate operational workflows, simplify infrastructure management, optimize cloud storage costs, enable 24/7 natural language user support, auto-generate content summaries, extract metadata using NLP/computer vision, detect inappropriate content, analyze content for trends.\n\nTechnical Requirements: Modernize CI/CD for containerized deployments, secure high-performance hybrid cloud connectivity, scalable Kubernetes on-prem and cloud, optimize storage costs, AI-powered harmful content detection, auditable/explainable AI, LLMs for personalized experiences, advanced chatbots with NLU.",
    "caseStudyName": "Altostrat Media",
    "options": [
      "Use Cloud Vision API SafeSearch and Video Intelligence API for detection, with Vertex AI Explainable AI to provide feature attributions for each decision",
      "Build a custom TensorFlow model on Vertex AI Training with manual audit logs written to BigQuery",
      "Use Cloud Natural Language API for text and Cloud Vision API for images, store all results in Cloud Storage",
      "Use Vertex AI AutoML to train a custom content moderation model without explainability features"
    ],
    "correctAnswer": 0,
    "explanation": "Cloud Vision API SafeSearch and Video Intelligence API provide pre-built inappropriate content detection. Vertex AI Explainable AI satisfies the technical requirement for auditable, explainable AI decisions by providing feature attributions. The technical requirements explicitly call out both harmful content detection and explainability, making this the complete answer. Custom models (B, D) add unnecessary complexity when pre-built APIs already solve content moderation.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "Altostrat maintains legacy on-premises content ingestion systems and needs secure, high-performance connectivity to Google Cloud for data ingestion. What should they implement?",
    "caseStudy": "Company Overview: Altostrat is a prominent media company with a vast library of audio and video content including podcasts, interviews, news, and documentaries.\n\nExisting Environment: GKE for scalability, Cloud Storage for media library, BigQuery as data warehouse, Cloud Run functions for serverless event-driven tasks. Legacy on-premises systems for content ingestion and archival. Google Identity + third-party IdPs. Cloud Monitoring + Prometheus for observability.\n\nBusiness Requirements: Accelerate operational workflows, simplify infrastructure management, optimize cloud storage costs, enable 24/7 natural language user support, auto-generate content summaries, extract metadata using NLP/computer vision, detect inappropriate content, analyze content for trends.\n\nTechnical Requirements: Modernize CI/CD for containerized deployments, secure high-performance hybrid cloud connectivity, scalable Kubernetes on-prem and cloud, optimize storage costs, AI-powered harmful content detection, auditable/explainable AI, LLMs for personalized experiences, advanced chatbots with NLU.",
    "caseStudyName": "Altostrat Media",
    "options": [
      "Cloud VPN tunnels for encrypted connectivity between on-premises and GCP",
      "Dedicated Interconnect or Partner Interconnect for private high-bandwidth connectivity",
      "Cloud NAT to allow on-premises systems to connect to GCP APIs",
      "Direct Peering with Google to access GCP services"
    ],
    "correctAnswer": 1,
    "explanation": "The technical requirements explicitly call for 'secure, high-performance hybrid cloud connectivity for data ingestion.' Dedicated or Partner Interconnect provides private, high-bandwidth connectivity that bypasses the public internet - ideal for transferring large media files. Cloud VPN (A) is encrypted but lower bandwidth and higher latency, insufficient for 'high-performance' media data ingestion. Cloud NAT (C) is for outbound internet access, not hybrid connectivity.",
    "domain": "Hybrid & Multicloud"
  },
  {
    "question": "Altostrat wants to optimize cloud storage costs for their growing media library while maintaining availability. Their content ranges from actively viewed to rarely accessed archival footage. What storage strategy should they implement?",
    "caseStudy": "Company Overview: Altostrat is a prominent media company with a vast library of audio and video content including podcasts, interviews, news, and documentaries.\n\nExisting Environment: GKE for scalability, Cloud Storage for media library, BigQuery as data warehouse, Cloud Run functions for serverless event-driven tasks. Legacy on-premises systems for content ingestion and archival. Google Identity + third-party IdPs. Cloud Monitoring + Prometheus for observability.\n\nBusiness Requirements: Accelerate operational workflows, simplify infrastructure management, optimize cloud storage costs, enable 24/7 natural language user support, auto-generate content summaries, extract metadata using NLP/computer vision, detect inappropriate content, analyze content for trends.\n\nTechnical Requirements: Modernize CI/CD for containerized deployments, secure high-performance hybrid cloud connectivity, scalable Kubernetes on-prem and cloud, optimize storage costs, AI-powered harmful content detection, auditable/explainable AI, LLMs for personalized experiences, advanced chatbots with NLU.",
    "caseStudyName": "Altostrat Media",
    "options": [
      "Store all media in Cloud Storage Standard class for consistent performance",
      "Use Cloud Storage with Autoclass to automatically transition objects between storage classes based on access patterns",
      "Store recent content in Cloud Storage Standard, manually move older content to Nearline or Coldline based on age",
      "Use Filestore for active content and Cloud Storage Archive for everything older than 1 year"
    ],
    "correctAnswer": 1,
    "explanation": "Cloud Storage Autoclass automatically moves objects between Standard, Nearline, Coldline, and Archive based on actual access patterns without manual intervention. This directly addresses Altostrat's requirement to 'optimize cloud storage costs for growing media volumes' with minimal management overhead. Manual tiering (C) requires operational effort and doesn't adapt to actual usage patterns. Standard for everything (A) doesn't optimize costs. Filestore (D) is for file system workloads, not media storage.",
    "domain": "Design & Planning"
  },
  {
    "question": "Altostrat wants to modernize their CI/CD pipeline for containerized deployments with a centralized management platform that supports both their GKE cloud environment and on-premises Kubernetes. What solution should they implement?",
    "caseStudy": "Company Overview: Altostrat is a prominent media company with a vast library of audio and video content including podcasts, interviews, news, and documentaries.\n\nExisting Environment: GKE for scalability, Cloud Storage for media library, BigQuery as data warehouse, Cloud Run functions for serverless event-driven tasks. Legacy on-premises systems for content ingestion and archival. Google Identity + third-party IdPs. Cloud Monitoring + Prometheus for observability.\n\nBusiness Requirements: Accelerate operational workflows, simplify infrastructure management, optimize cloud storage costs, enable 24/7 natural language user support, auto-generate content summaries, extract metadata using NLP/computer vision, detect inappropriate content, analyze content for trends.\n\nTechnical Requirements: Modernize CI/CD for containerized deployments, secure high-performance hybrid cloud connectivity, scalable Kubernetes on-prem and cloud, optimize storage costs, AI-powered harmful content detection, auditable/explainable AI, LLMs for personalized experiences, advanced chatbots with NLU.",
    "caseStudyName": "Altostrat Media",
    "options": [
      "Cloud Build for CI/CD pipelines with Artifact Registry for container images, deployed to GKE",
      "Anthos with Cloud Build and Artifact Registry, using Anthos Config Management for consistent policy across on-premises and cloud Kubernetes clusters",
      "Jenkins on Compute Engine for CI/CD with manual deployment scripts for on-premises and GKE",
      "Cloud Deploy for managed delivery pipelines targeting GKE only"
    ],
    "correctAnswer": 1,
    "explanation": "Anthos provides centralized management across both on-premises and cloud Kubernetes clusters, satisfying the technical requirement for 'scalable, performant Kubernetes environments both on-premises and in the cloud.' Cloud Build handles CI, Artifact Registry stores images, and Anthos Config Management enforces consistent policy everywhere. Cloud Deploy (D) only targets GKE. Jenkins (C) requires significant management. Cloud Build alone (A) doesn't address on-premises Kubernetes management.",
    "domain": "Implementation"
  },
  {
    "question": "Altostrat uses a mix of Cloud Monitoring and Prometheus for observability, with alerts delivered only via email which are frequently missed. How should they modernize their alerting strategy?",
    "caseStudy": "Company Overview: Altostrat is a prominent media company with a vast library of audio and video content including podcasts, interviews, news, and documentaries.\n\nExisting Environment: GKE for scalability, Cloud Storage for media library, BigQuery as data warehouse, Cloud Run functions for serverless event-driven tasks. Legacy on-premises systems for content ingestion and archival. Google Identity + third-party IdPs. Cloud Monitoring + Prometheus for observability.\n\nBusiness Requirements: Accelerate operational workflows, simplify infrastructure management, optimize cloud storage costs, enable 24/7 natural language user support, auto-generate content summaries, extract metadata using NLP/computer vision, detect inappropriate content, analyze content for trends.\n\nTechnical Requirements: Modernize CI/CD for containerized deployments, secure high-performance hybrid cloud connectivity, scalable Kubernetes on-prem and cloud, optimize storage costs, AI-powered harmful content detection, auditable/explainable AI, LLMs for personalized experiences, advanced chatbots with NLU.",
    "caseStudyName": "Altostrat Media",
    "options": [
      "Migrate entirely to Prometheus and Grafana for unified open-source monitoring",
      "Use Cloud Monitoring with multi-channel alerting via PagerDuty or Cloud Monitoring notification channels including SMS, Pub/Sub, and webhooks",
      "Continue using email alerts but implement stricter SLAs for response times",
      "Deploy a custom alerting service on Cloud Run that reads from BigQuery logs"
    ],
    "correctAnswer": 1,
    "explanation": "Cloud Monitoring supports multiple notification channels including email, SMS, PagerDuty, webhooks, and Pub/Sub. This directly addresses the business requirement for 'centralized visibility and proactive action' and the problem of email alerts being ignored. Multi-channel alerting ensures critical alerts reach the right people through the right channels. Pure Prometheus/Grafana (A) loses native GCP integration. Stricter SLAs (C) doesn't solve the underlying alert delivery problem.",
    "domain": "Reliability"
  },
  {
    "question": "Cymbal wants to automatically generate product attributes and descriptions from supplier-provided information including titles, descriptions, and images. Which Google Cloud service is most appropriate?",
    "caseStudy": "Company Overview: Cymbal is a fast-growing online retailer with a large product catalog spanning multiple retail sub-verticals.\n\nExisting Environment: Mix of on-premises and cloud systems. Databases: MySQL, MS SQL Server, Redis, MongoDB. Kubernetes clusters. Legacy SFTP/ETL batch integrations. Custom web app querying relational DBs. IVR system for customer calls. Call center agents for manual order entry. Open source monitoring: Grafana, Nagios, Elastic.\n\nBusiness Requirements: Automate product catalog enrichment, improve product discoverability, increase customer engagement, drive sales conversion, reduce call center and data center costs.\n\nTechnical Requirements: Generate product attributes from supplier data, generate/enhance product images, automate product discovery via natural language, handle scale without performance loss, human-in-the-loop review UI for AI-generated content, data security and compliance.",
    "caseStudyName": "Cymbal Retail",
    "options": [
      "Vertex AI with Gemini multimodal models to process text and images and generate structured product attributes",
      "Cloud Vision API for image analysis and Cloud Natural Language API for text processing",
      "AutoML Tables to classify products into categories based on supplier data",
      "Document AI to extract structured data from supplier documents"
    ],
    "correctAnswer": 0,
    "explanation": "Gemini's multimodal capabilities can process both text (supplier descriptions) and images simultaneously to generate rich, structured product attributes. This directly addresses the technical requirement for attribute generation from 'titles, descriptions, and images.' Pre-built APIs (B) can analyze content but can't generate new attributes. AutoML Tables (C) classifies but doesn't generate descriptions. Document AI (D) extracts from documents but doesn't handle images or generate new content.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "Cymbal wants to replace their IVR system and reduce call center costs by allowing customers to complete orders through natural language conversations. Which solution should they implement?",
    "caseStudy": "Company Overview: Cymbal is a fast-growing online retailer with a large product catalog spanning multiple retail sub-verticals.\n\nExisting Environment: Mix of on-premises and cloud systems. Databases: MySQL, MS SQL Server, Redis, MongoDB. Kubernetes clusters. Legacy SFTP/ETL batch integrations. Custom web app querying relational DBs. IVR system for customer calls. Call center agents for manual order entry. Open source monitoring: Grafana, Nagios, Elastic.\n\nBusiness Requirements: Automate product catalog enrichment, improve product discoverability, increase customer engagement, drive sales conversion, reduce call center and data center costs.\n\nTechnical Requirements: Generate product attributes from supplier data, generate/enhance product images, automate product discovery via natural language, handle scale without performance loss, human-in-the-loop review UI for AI-generated content, data security and compliance.",
    "caseStudyName": "Cymbal Retail",
    "options": [
      "Dialogflow CX with Contact Center AI to handle customer conversations and integrate with existing order management systems",
      "A custom Cloud Run application with Vertex AI for natural language processing",
      "Vertex AI Agent Builder to create a conversational agent with Discovery AI for product search",
      "Cloud Functions triggered by customer speech input processed by Speech-to-Text API"
    ],
    "correctAnswer": 2,
    "explanation": "Vertex AI Agent Builder combined with Discovery AI directly addresses Cymbal's conversational commerce requirement - the solution concept explicitly mentions 'Google Cloud's Discovery AI to process user requests and retrieve the most relevant products.' Agent Builder provides the conversational layer while Discovery AI handles intelligent product retrieval. This is the most complete, purpose-built solution for Cymbal's stated use case. Dialogflow CX (A) is older and doesn't integrate Discovery AI as cleanly.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "Cymbal requires a Human-in-the-Loop (HITL) review process where associates can review, approve, reject, or modify AI-generated product content before it goes live. What architecture supports this?",
    "caseStudy": "Company Overview: Cymbal is a fast-growing online retailer with a large product catalog spanning multiple retail sub-verticals.\n\nExisting Environment: Mix of on-premises and cloud systems. Databases: MySQL, MS SQL Server, Redis, MongoDB. Kubernetes clusters. Legacy SFTP/ETL batch integrations. Custom web app querying relational DBs. IVR system for customer calls. Call center agents for manual order entry. Open source monitoring: Grafana, Nagios, Elastic.\n\nBusiness Requirements: Automate product catalog enrichment, improve product discoverability, increase customer engagement, drive sales conversion, reduce call center and data center costs.\n\nTechnical Requirements: Generate product attributes from supplier data, generate/enhance product images, automate product discovery via natural language, handle scale without performance loss, human-in-the-loop review UI for AI-generated content, data security and compliance.",
    "caseStudyName": "Cymbal Retail",
    "options": [
      "Store AI-generated content directly in the production database with a rollback mechanism",
      "Use Vertex AI Pipelines with a manual approval step that pauses the pipeline, notifies reviewers via Pub/Sub, and resumes after approval via a Cloud Run UI",
      "Have AI generate content in batch overnight and email it to associates for review",
      "Use BigQuery to store pending content and have associates run SQL queries to approve records"
    ],
    "correctAnswer": 1,
    "explanation": "Vertex AI Pipelines supports conditional steps and pausing for human review. Pub/Sub notifies reviewers, and a Cloud Run UI provides the interface for approving, rejecting, or modifying content. This implements a proper HITL workflow as required. Storing directly to production (A) bypasses the review requirement entirely. Email batch review (C) is manual and error-prone. SQL approval (D) is not a user-friendly interface for non-technical associates.",
    "domain": "Implementation"
  },
  {
    "question": "Cymbal's current web application queries relational databases by product name and category only. They want to implement natural language product search so customers can describe what they need conversationally. What should they implement?",
    "caseStudy": "Company Overview: Cymbal is a fast-growing online retailer with a large product catalog spanning multiple retail sub-verticals.\n\nExisting Environment: Mix of on-premises and cloud systems. Databases: MySQL, MS SQL Server, Redis, MongoDB. Kubernetes clusters. Legacy SFTP/ETL batch integrations. Custom web app querying relational DBs. IVR system for customer calls. Call center agents for manual order entry. Open source monitoring: Grafana, Nagios, Elastic.\n\nBusiness Requirements: Automate product catalog enrichment, improve product discoverability, increase customer engagement, drive sales conversion, reduce call center and data center costs.\n\nTechnical Requirements: Generate product attributes from supplier data, generate/enhance product images, automate product discovery via natural language, handle scale without performance loss, human-in-the-loop review UI for AI-generated content, data security and compliance.",
    "caseStudyName": "Cymbal Retail",
    "options": [
      "Add full-text search to their existing MySQL database using MATCH AGAINST queries",
      "Use Vertex AI Search (Discovery AI for Retail) to provide semantic, natural language product discovery",
      "Implement Elasticsearch on GKE to index the product catalog",
      "Use Cloud Natural Language API to parse queries then translate to SQL"
    ],
    "correctAnswer": 1,
    "explanation": "Vertex AI Search (Discovery AI for Retail) is specifically designed for e-commerce product discovery with semantic understanding of natural language queries. The solution concept explicitly calls out 'Discovery AI to process user requests and retrieve the most relevant products.' Full-text SQL search (A) only matches keywords. Elasticsearch (C) requires significant management and tuning. SQL translation (D) is fragile and can't handle semantic meaning.",
    "domain": "AI & Machine Learning"
  },
  {
    "question": "Cymbal needs to migrate their heterogeneous databases (MySQL, MS SQL Server, Redis, MongoDB) to Google Cloud while modernizing their stack. What is the recommended approach?",
    "caseStudy": "Company Overview: Cymbal is a fast-growing online retailer with a large product catalog spanning multiple retail sub-verticals.\n\nExisting Environment: Mix of on-premises and cloud systems. Databases: MySQL, MS SQL Server, Redis, MongoDB. Kubernetes clusters. Legacy SFTP/ETL batch integrations. Custom web app querying relational DBs. IVR system for customer calls. Call center agents for manual order entry. Open source monitoring: Grafana, Nagios, Elastic.\n\nBusiness Requirements: Automate product catalog enrichment, improve product discoverability, increase customer engagement, drive sales conversion, reduce call center and data center costs.\n\nTechnical Requirements: Generate product attributes from supplier data, generate/enhance product images, automate product discovery via natural language, handle scale without performance loss, human-in-the-loop review UI for AI-generated content, data security and compliance.",
    "caseStudyName": "Cymbal Retail",
    "options": [
      "Migrate all databases to Cloud Spanner for unified management",
      "Use Database Migration Service to migrate MySQL to Cloud SQL, MS SQL Server to Cloud SQL, and evaluate Firestore for MongoDB workloads",
      "Lift and shift all databases to Compute Engine VMs to minimize migration risk",
      "Migrate everything to BigQuery as the single source of truth"
    ],
    "correctAnswer": 1,
    "explanation": "Database Migration Service (DMS) provides managed migration for MySQL and SQL Server to Cloud SQL with minimal downtime. MongoDB workloads are candidates for Firestore (document model) or Cloud SQL depending on usage patterns. This right-sizes each database to an appropriate managed GCP service. Spanner (A) is expensive and overkill for typical retail workloads. VM lift-and-shift (C) doesn't reduce operational overhead. BigQuery (D) is an analytics warehouse, not a transactional database.",
    "domain": "Implementation"
  },
  {
    "question": "Cymbal's open source monitoring stack (Grafana, Nagios, Elastic) creates operational overhead. They want unified monitoring and proactive alerting as part of their modernization. What should they implement?",
    "caseStudy": "Company Overview: Cymbal is a fast-growing online retailer with a large product catalog spanning multiple retail sub-verticals.\n\nExisting Environment: Mix of on-premises and cloud systems. Databases: MySQL, MS SQL Server, Redis, MongoDB. Kubernetes clusters. Legacy SFTP/ETL batch integrations. Custom web app querying relational DBs. IVR system for customer calls. Call center agents for manual order entry. Open source monitoring: Grafana, Nagios, Elastic.\n\nBusiness Requirements: Automate product catalog enrichment, improve product discoverability, increase customer engagement, drive sales conversion, reduce call center and data center costs.\n\nTechnical Requirements: Generate product attributes from supplier data, generate/enhance product images, automate product discovery via natural language, handle scale without performance loss, human-in-the-loop review UI for AI-generated content, data security and compliance.",
    "caseStudyName": "Cymbal Retail",
    "options": [
      "Keep Grafana and replace Nagios with Cloud Monitoring alerts",
      "Migrate to Cloud Monitoring and Cloud Logging with custom dashboards, SLO monitoring, and multi-channel alerting",
      "Deploy a managed Elasticsearch cluster on GKE for unified log aggregation",
      "Use BigQuery for log storage and Data Studio for dashboards"
    ],
    "correctAnswer": 1,
    "explanation": "Cloud Monitoring and Cloud Logging provide unified, fully managed observability that eliminates the overhead of managing Grafana, Nagios, and Elastic separately. SLO monitoring enables proactive alerting, directly addressing Cymbal's requirement to 'reduce costs around manual processes.' Native GCP integration means automatic metrics collection from all GCP services. Keeping open source tools (A, C) maintains operational overhead. BigQuery/Data Studio (D) isn't real-time monitoring.",
    "domain": "Reliability"
  },
  {
    "question": "KnightMotives needs reliable network connectivity for vehicles in rural areas to support real-time AI features. Their manufacturing plants also need improved connectivity to headquarters. What approach addresses both needs?",
    "caseStudy": "Company Overview: KnightMotives is a car manufacturer specializing in autonomous, self-driving vehicles including BEVs, hybrids, and ICE vehicles. Hybrid/ICE vehicles lack modern in-vehicle technology causing declining sales. Online ordering system is unreliable.\n\nExisting Environment: Largely on-premises IT with some cloud. Outdated mainframe for supply chain. Outdated ERP. No dealer budget for new equipment. Multiple codebases across vehicles, significant technical debt. Network connectivity challenges at plants and in rural areas.\n\nBusiness Requirements: Personalized driver relationship, cohesive experience across all models, better build-to-order model, monetize corporate data, modernize obsolete AI infrastructure, EU data protection compliance, autonomous driving investment, employee upskilling.\n\nTechnical Requirements: Consistent UX with AI across all vehicle models, update legacy in-vehicle hardware/software, reliable rural network connectivity, hybrid cloud strategy, modernize legacy systems, robust data management platform, comprehensive security framework, improved online build-to-order system, CRM system.",
    "caseStudyName": "KnightMotives Automotive",
    "options": [
      "Deploy Cloud VPN between all plants and headquarters, use standard cellular for vehicle connectivity",
      "Use Dedicated Interconnect for plant-to-HQ connectivity and integrate with mobile network operators using GCP's Network Connectivity Center for vehicle telematics",
      "Use Cloud CDN to cache vehicle software updates closer to rural areas",
      "Deploy Anthos on edge devices in each plant for local processing"
    ],
    "correctAnswer": 1,
    "explanation": "Dedicated Interconnect provides the high-bandwidth, low-latency connectivity needed between manufacturing plants and headquarters. Network Connectivity Center manages hybrid and multicloud network connectivity including vehicle telematics integration. This addresses both the plant connectivity requirement and rural vehicle connectivity. Cloud VPN (A) lacks the performance needed for plant-HQ. CDN (C) only caches content, doesn't solve real-time connectivity. Anthos on edge (D) helps with compute but not network connectivity.",
    "domain": "Hybrid & Multicloud"
  },
  {
    "question": "KnightMotives stores corporate data in silos across multiple systems. They want to monetize this data while maintaining strict EU data protection compliance. What architecture should they implement?",
    "caseStudy": "Company Overview: KnightMotives is a car manufacturer specializing in autonomous, self-driving vehicles including BEVs, hybrids, and ICE vehicles. Hybrid/ICE vehicles lack modern in-vehicle technology causing declining sales. Online ordering system is unreliable.\n\nExisting Environment: Largely on-premises IT with some cloud. Outdated mainframe for supply chain. Outdated ERP. No dealer budget for new equipment. Multiple codebases across vehicles, significant technical debt. Network connectivity challenges at plants and in rural areas.\n\nBusiness Requirements: Personalized driver relationship, cohesive experience across all models, better build-to-order model, monetize corporate data, modernize obsolete AI infrastructure, EU data protection compliance, autonomous driving investment, employee upskilling.\n\nTechnical Requirements: Consistent UX with AI across all vehicle models, update legacy in-vehicle hardware/software, reliable rural network connectivity, hybrid cloud strategy, modernize legacy systems, robust data management platform, comprehensive security framework, improved online build-to-order system, CRM system.",
    "caseStudyName": "KnightMotives Automotive",
    "options": [
      "Consolidate all data into BigQuery with column-level security, data masking, and VPC Service Controls to prevent exfiltration, with Cloud DLP to identify and protect PII",
      "Store all data in Cloud Storage with IAM policies controlling access per dataset",
      "Use Pub/Sub to stream all data to partners for monetization with encryption in transit",
      "Deploy a data lake on Compute Engine VMs with custom access controls"
    ],
    "correctAnswer": 0,
    "explanation": "BigQuery with column-level security, data masking, and VPC Service Controls provides the robust data management platform required. Cloud DLP identifies and protects PII for EU GDPR compliance. VPC Service Controls prevents data exfiltration even with compromised credentials. This addresses both data monetization (making data accessible to authorized partners) and strict data protection (EU regulations). Cloud Storage IAM (B) lacks column-level controls. Pub/Sub to partners (C) has no compliance controls. Custom VMs (D) add management overhead.",
    "domain": "Security & Compliance"
  },
  {
    "question": "KnightMotives has significant technical debt from multiple codebases across vehicle models and needs a consistent AI-powered UX across all models. What approach enables this while managing the legacy codebase challenge?",
    "caseStudy": "Company Overview: KnightMotives is a car manufacturer specializing in autonomous, self-driving vehicles including BEVs, hybrids, and ICE vehicles. Hybrid/ICE vehicles lack modern in-vehicle technology causing declining sales. Online ordering system is unreliable.\n\nExisting Environment: Largely on-premises IT with some cloud. Outdated mainframe for supply chain. Outdated ERP. No dealer budget for new equipment. Multiple codebases across vehicles, significant technical debt. Network connectivity challenges at plants and in rural areas.\n\nBusiness Requirements: Personalized driver relationship, cohesive experience across all models, better build-to-order model, monetize corporate data, modernize obsolete AI infrastructure, EU data protection compliance, autonomous driving investment, employee upskilling.\n\nTechnical Requirements: Consistent UX with AI across all vehicle models, update legacy in-vehicle hardware/software, reliable rural network connectivity, hybrid cloud strategy, modernize legacy systems, robust data management platform, comprehensive security framework, improved online build-to-order system, CRM system.",
    "caseStudyName": "KnightMotives Automotive",
    "options": [
      "Rewrite all vehicle software simultaneously using a unified codebase deployed via GKE",
      "Use Apigee to create a unified API layer that abstracts legacy vehicle codebases, with Vertex AI powering AI features accessed through standardized APIs",
      "Deploy separate AI models for each vehicle model type managed independently",
      "Use Firebase to build a consistent mobile companion app while leaving vehicle software unchanged"
    ],
    "correctAnswer": 1,
    "explanation": "Apigee provides an API management layer that abstracts the underlying fragmented codebases, presenting a consistent interface. Vertex AI powers AI features through these standardized APIs, enabling consistent UX across all models without requiring immediate codebase consolidation. This addresses technical debt gradually. Full rewrite (A) is risky and takes years. Separate models per vehicle (C) doesn't achieve consistency. Firebase companion app (D) doesn't address in-vehicle experience.",
    "domain": "Design & Planning"
  },
  {
    "question": "KnightMotives has experienced past data breaches and needs a comprehensive security framework. Their autonomous vehicle data is especially sensitive. What security architecture should they prioritize?",
    "caseStudy": "Company Overview: KnightMotives is a car manufacturer specializing in autonomous, self-driving vehicles including BEVs, hybrids, and ICE vehicles. Hybrid/ICE vehicles lack modern in-vehicle technology causing declining sales. Online ordering system is unreliable.\n\nExisting Environment: Largely on-premises IT with some cloud. Outdated mainframe for supply chain. Outdated ERP. No dealer budget for new equipment. Multiple codebases across vehicles, significant technical debt. Network connectivity challenges at plants and in rural areas.\n\nBusiness Requirements: Personalized driver relationship, cohesive experience across all models, better build-to-order model, monetize corporate data, modernize obsolete AI infrastructure, EU data protection compliance, autonomous driving investment, employee upskilling.\n\nTechnical Requirements: Consistent UX with AI across all vehicle models, update legacy in-vehicle hardware/software, reliable rural network connectivity, hybrid cloud strategy, modernize legacy systems, robust data management platform, comprehensive security framework, improved online build-to-order system, CRM system.",
    "caseStudyName": "KnightMotives Automotive",
    "options": [
      "Implement VPC Service Controls around sensitive data, Binary Authorization for all deployments, Cloud Armor for API protection, and Security Command Center for centralized threat detection",
      "Enable Cloud KMS encryption for all data at rest and in transit",
      "Use IAM with least privilege for all service accounts and audit all access via Cloud Audit Logs",
      "Deploy a third-party SIEM solution on Compute Engine for security event management"
    ],
    "correctAnswer": 0,
    "explanation": "A layered security approach addresses KnightMotives' security requirements: VPC Service Controls prevents data exfiltration, Binary Authorization ensures only approved software deploys to vehicles/systems, Cloud Armor protects APIs, and Security Command Center provides centralized threat detection and compliance monitoring. KMS encryption alone (B) is necessary but insufficient. Least privilege IAM (C) is also necessary but not comprehensive. Third-party SIEM (D) adds management overhead when Security Command Center is native.",
    "domain": "Security & Compliance"
  },
  {
    "question": "KnightMotives wants to improve their unreliable online build-to-order system which dealers depend on. The system must be highly available and handle global dealer traffic. What architecture should they implement?",
    "caseStudy": "Company Overview: KnightMotives is a car manufacturer specializing in autonomous, self-driving vehicles including BEVs, hybrids, and ICE vehicles. Hybrid/ICE vehicles lack modern in-vehicle technology causing declining sales. Online ordering system is unreliable.\n\nExisting Environment: Largely on-premises IT with some cloud. Outdated mainframe for supply chain. Outdated ERP. No dealer budget for new equipment. Multiple codebases across vehicles, significant technical debt. Network connectivity challenges at plants and in rural areas.\n\nBusiness Requirements: Personalized driver relationship, cohesive experience across all models, better build-to-order model, monetize corporate data, modernize obsolete AI infrastructure, EU data protection compliance, autonomous driving investment, employee upskilling.\n\nTechnical Requirements: Consistent UX with AI across all vehicle models, update legacy in-vehicle hardware/software, reliable rural network connectivity, hybrid cloud strategy, modernize legacy systems, robust data management platform, comprehensive security framework, improved online build-to-order system, CRM system.",
    "caseStudyName": "KnightMotives Automotive",
    "options": [
      "Deploy the application on GKE with Cloud Spanner as the backend database, using Cloud Load Balancing with multi-region failover",
      "Run the application on App Engine Standard with Cloud SQL in a single region",
      "Deploy on Compute Engine managed instance groups with regional persistent disks",
      "Use Cloud Run with Firestore for the order database"
    ],
    "correctAnswer": 0,
    "explanation": "GKE provides scalable container orchestration, Cloud Spanner handles global relational data with strong consistency (critical for order management across regions), and Cloud Load Balancing with multi-region failover ensures high availability. This addresses the reliability problems causing dealer relationship strain. App Engine + single-region Cloud SQL (B) creates a single point of failure. Compute Engine MIGs (C) lack the global database consistency needed. Cloud Run + Firestore (D) works for simpler use cases but Firestore's document model is a poor fit for complex order management.",
    "domain": "Reliability"
  },
  {
    "question": "KnightMotives wants to adopt a hybrid cloud strategy for their IT infrastructure modernization while their mainframe and ERP systems are gradually replaced. What approach minimizes disruption?",
    "caseStudy": "Company Overview: KnightMotives is a car manufacturer specializing in autonomous, self-driving vehicles including BEVs, hybrids, and ICE vehicles. Hybrid/ICE vehicles lack modern in-vehicle technology causing declining sales. Online ordering system is unreliable.\n\nExisting Environment: Largely on-premises IT with some cloud. Outdated mainframe for supply chain. Outdated ERP. No dealer budget for new equipment. Multiple codebases across vehicles, significant technical debt. Network connectivity challenges at plants and in rural areas.\n\nBusiness Requirements: Personalized driver relationship, cohesive experience across all models, better build-to-order model, monetize corporate data, modernize obsolete AI infrastructure, EU data protection compliance, autonomous driving investment, employee upskilling.\n\nTechnical Requirements: Consistent UX with AI across all vehicle models, update legacy in-vehicle hardware/software, reliable rural network connectivity, hybrid cloud strategy, modernize legacy systems, robust data management platform, comprehensive security framework, improved online build-to-order system, CRM system.",
    "caseStudyName": "KnightMotives Automotive",
    "options": [
      "Immediately migrate all systems to GCP and decommission on-premises infrastructure",
      "Use Anthos to manage workloads across on-premises and GCP, migrating applications incrementally while maintaining mainframe integrations via Apigee API gateway",
      "Maintain all systems on-premises until modernization is complete before moving to cloud",
      "Move only new applications to GCP and keep all legacy systems permanently on-premises"
    ],
    "correctAnswer": 1,
    "explanation": "Anthos enables a true hybrid strategy by managing workloads across both on-premises and GCP environments consistently. Migrating incrementally reduces risk while Apigee maintains integrations with legacy mainframe and ERP systems during the transition. Immediate full migration (A) is too risky with critical manufacturing systems. Staying on-premises (C) delays modernization benefits. Permanent split (D) creates ongoing operational complexity without a path to full modernization.",
    "domain": "Hybrid & Multicloud"
  },
  {
    "question": "EHR Healthcare needs to maintain legacy file- and API-based integrations with insurance providers on-premises while migrating to Google Cloud. There are no plans to replace these systems soon. What solution maintains these integrations?",
    "caseStudy": "Company Overview: EHR Healthcare provides electronic health record (EHR) software as a service to multinational medical offices, hospitals, and insurance providers.\n\nExisting Environment: Multiple colocation facilities (one lease expiring). Customer-facing apps are web-based, many containerized on Kubernetes. Databases: MySQL, MS SQL Server, Redis, MongoDB. Legacy file- and API-based integrations with insurance providers on-premises (no plans to replace soon). Microsoft Active Directory for user management. Open source monitoring tools, alerts via email often ignored.\n\nBusiness Requirements: Onboard new insurance providers quickly, 99.9% availability for customer-facing systems, centralized visibility and proactive monitoring, healthcare trend insights, reduce latency, maintain regulatory compliance, decrease infrastructure admin costs, generate industry trend reports.\n\nTechnical Requirements: Maintain legacy interfaces to insurance providers (on-prem + cloud), consistent container management, secure high-performance on-prem to GCP connection, consistent logging/monitoring/alerting, manage multiple container environments, dynamically scale, ingest data from new providers.",
    "caseStudyName": "EHR Healthcare",
    "options": [
      "Migrate the legacy systems to Cloud Run to make them cloud-native",
      "Use Dedicated Interconnect or Partner Interconnect to maintain secure, high-performance connectivity between on-premises legacy systems and GCP workloads",
      "Replicate all insurance provider data to BigQuery and retire the legacy integrations",
      "Use Cloud VPN for connectivity and expose legacy systems via internal load balancers"
    ],
    "correctAnswer": 1,
    "explanation": "The technical requirements explicitly state the need for 'a secure and high-performance connection between on-premises systems and Google Cloud' and maintaining legacy interfaces. Dedicated or Partner Interconnect provides private, reliable, high-bandwidth connectivity without touching the legacy systems. Cloud Run migration (A) contradicts the requirement to not replace these systems. BigQuery replication (C) doesn't maintain real-time integration. Cloud VPN (D) is lower performance and less reliable than Interconnect for production workloads.",
    "domain": "Hybrid & Multicloud"
  },
  {
    "question": "EHR Healthcare currently manages Microsoft Active Directory for user management. After migrating to GCP, how should they manage identity while maintaining AD compatibility?",
    "caseStudy": "Company Overview: EHR Healthcare provides electronic health record (EHR) software as a service to multinational medical offices, hospitals, and insurance providers.\n\nExisting Environment: Multiple colocation facilities (one lease expiring). Customer-facing apps are web-based, many containerized on Kubernetes. Databases: MySQL, MS SQL Server, Redis, MongoDB. Legacy file- and API-based integrations with insurance providers on-premises (no plans to replace soon). Microsoft Active Directory for user management. Open source monitoring tools, alerts via email often ignored.\n\nBusiness Requirements: Onboard new insurance providers quickly, 99.9% availability for customer-facing systems, centralized visibility and proactive monitoring, healthcare trend insights, reduce latency, maintain regulatory compliance, decrease infrastructure admin costs, generate industry trend reports.\n\nTechnical Requirements: Maintain legacy interfaces to insurance providers (on-prem + cloud), consistent container management, secure high-performance on-prem to GCP connection, consistent logging/monitoring/alerting, manage multiple container environments, dynamically scale, ingest data from new providers.",
    "caseStudyName": "EHR Healthcare",
    "options": [
      "Replace Active Directory with Cloud Identity and recreate all users manually",
      "Use Google Cloud Directory Sync (GCDS) to synchronize Active Directory users to Cloud Identity, enabling SSO across on-premises and GCP resources",
      "Deploy Active Directory on Compute Engine VMs in GCP",
      "Use Cloud IAM independently for GCP resources while keeping AD only for on-premises"
    ],
    "correctAnswer": 1,
    "explanation": "GCDS synchronizes existing AD users to Cloud Identity, enabling SSO across both environments without disrupting existing AD infrastructure. This supports the business requirement to onboard new insurance providers quickly while maintaining existing authentication. Manual recreation (A) is error-prone and time-consuming. AD on VMs (C) requires management overhead and doesn't integrate with Cloud Identity. Split identity systems (D) creates management complexity and poor user experience.",
    "domain": "Security & Compliance"
  },
  {
    "question": "EHR Healthcare needs 99.9% availability for all customer-facing applications. Their apps are containerized on Kubernetes and the colocation facility lease is expiring. What architecture should they implement on GCP?",
    "caseStudy": "Company Overview: EHR Healthcare provides electronic health record (EHR) software as a service to multinational medical offices, hospitals, and insurance providers.\n\nExisting Environment: Multiple colocation facilities (one lease expiring). Customer-facing apps are web-based, many containerized on Kubernetes. Databases: MySQL, MS SQL Server, Redis, MongoDB. Legacy file- and API-based integrations with insurance providers on-premises (no plans to replace soon). Microsoft Active Directory for user management. Open source monitoring tools, alerts via email often ignored.\n\nBusiness Requirements: Onboard new insurance providers quickly, 99.9% availability for customer-facing systems, centralized visibility and proactive monitoring, healthcare trend insights, reduce latency, maintain regulatory compliance, decrease infrastructure admin costs, generate industry trend reports.\n\nTechnical Requirements: Maintain legacy interfaces to insurance providers (on-prem + cloud), consistent container management, secure high-performance on-prem to GCP connection, consistent logging/monitoring/alerting, manage multiple container environments, dynamically scale, ingest data from new providers.",
    "caseStudyName": "EHR Healthcare",
    "options": [
      "Deploy all applications on a single regional GKE cluster with node auto-provisioning",
      "Use GKE Autopilot clusters across multiple regions with Cloud Load Balancing and automated failover, with Cloud Spanner for globally consistent data",
      "Migrate containers to App Engine Flexible for managed scaling",
      "Run containers on Compute Engine managed instance groups with custom orchestration"
    ],
    "correctAnswer": 1,
    "explanation": "GKE Autopilot reduces operational overhead (addressing the cost requirement), multi-region deployment with Cloud Load Balancing and failover achieves 99.9%+ availability, and Cloud Spanner ensures data consistency across regions. The technical requirements call for 'consistent way to manage container-based applications' and 'dynamically scale and provision new environments.' Single regional GKE (A) can't achieve multi-region availability. App Engine (C) loses Kubernetes consistency. Custom orchestration (D) increases operational overhead.",
    "domain": "Reliability"
  },
  {
    "question": "EHR Healthcare's monitoring is fragmented across open source tools and alerts are sent via email and often ignored. They need centralized, proactive monitoring for a healthcare environment with compliance requirements. What should they implement?",
    "caseStudy": "Company Overview: EHR Healthcare provides electronic health record (EHR) software as a service to multinational medical offices, hospitals, and insurance providers.\n\nExisting Environment: Multiple colocation facilities (one lease expiring). Customer-facing apps are web-based, many containerized on Kubernetes. Databases: MySQL, MS SQL Server, Redis, MongoDB. Legacy file- and API-based integrations with insurance providers on-premises (no plans to replace soon). Microsoft Active Directory for user management. Open source monitoring tools, alerts via email often ignored.\n\nBusiness Requirements: Onboard new insurance providers quickly, 99.9% availability for customer-facing systems, centralized visibility and proactive monitoring, healthcare trend insights, reduce latency, maintain regulatory compliance, decrease infrastructure admin costs, generate industry trend reports.\n\nTechnical Requirements: Maintain legacy interfaces to insurance providers (on-prem + cloud), consistent container management, secure high-performance on-prem to GCP connection, consistent logging/monitoring/alerting, manage multiple container environments, dynamically scale, ingest data from new providers.",
    "caseStudyName": "EHR Healthcare",
    "options": [
      "Standardize on Prometheus and Grafana across all environments for unified monitoring",
      "Implement Cloud Monitoring with SLO tracking, Cloud Logging with log retention policies meeting compliance requirements, and multi-channel alerting via PagerDuty integration",
      "Use Cloud Audit Logs only for compliance and keep existing monitoring tools",
      "Deploy Elastic Stack on GKE for unified log management"
    ],
    "correctAnswer": 1,
    "explanation": "Cloud Monitoring addresses 'centralized visibility and proactive action' and SLO tracking. Cloud Logging with retention policies satisfies healthcare compliance requirements for audit trails. Multi-channel alerting via PagerDuty solves the 'alerts ignored via email' problem. The technical requirements explicitly call for 'consistent logging, log retention, monitoring, and alerting capabilities.' Prometheus/Grafana (A) doesn't solve compliance log retention. Audit Logs only (C) isn't comprehensive monitoring. Elastic Stack on GKE (D) maintains operational overhead.",
    "domain": "Reliability"
  },
  {
    "question": "EHR Healthcare wants to onboard new insurance providers quickly and generate insights into healthcare trends from provider data. What data architecture enables both?",
    "caseStudy": "Company Overview: EHR Healthcare provides electronic health record (EHR) software as a service to multinational medical offices, hospitals, and insurance providers.\n\nExisting Environment: Multiple colocation facilities (one lease expiring). Customer-facing apps are web-based, many containerized on Kubernetes. Databases: MySQL, MS SQL Server, Redis, MongoDB. Legacy file- and API-based integrations with insurance providers on-premises (no plans to replace soon). Microsoft Active Directory for user management. Open source monitoring tools, alerts via email often ignored.\n\nBusiness Requirements: Onboard new insurance providers quickly, 99.9% availability for customer-facing systems, centralized visibility and proactive monitoring, healthcare trend insights, reduce latency, maintain regulatory compliance, decrease infrastructure admin costs, generate industry trend reports.\n\nTechnical Requirements: Maintain legacy interfaces to insurance providers (on-prem + cloud), consistent container management, secure high-performance on-prem to GCP connection, consistent logging/monitoring/alerting, manage multiple container environments, dynamically scale, ingest data from new providers.",
    "caseStudyName": "EHR Healthcare",
    "options": [
      "Use Cloud SQL as the central database for all provider data with custom reporting queries",
      "Use Pub/Sub to ingest data from new providers, Dataflow for transformation, BigQuery as the data warehouse for trend analysis, and Looker for reporting",
      "Use Cloud Storage to collect provider files and run batch Dataproc jobs for analysis",
      "Use Firestore for provider data ingestion and Cloud Functions for trend calculations"
    ],
    "correctAnswer": 1,
    "explanation": "Pub/Sub enables rapid onboarding of new providers through a standard ingestion interface (addressing 'create interfaces to ingest and process data from new providers'). Dataflow handles transformation, BigQuery stores and analyzes the data warehouse at scale, and Looker generates the trend reports and insights required by business requirements. Cloud SQL (A) doesn't scale for multi-provider analytics. Cloud Storage + Dataproc (C) works but lacks real-time ingestion. Firestore (D) is a poor fit for analytical workloads.",
    "domain": "Design & Planning"
  },
  {
    "question": "EHR Healthcare stores protected health information (PHI) and must maintain regulatory compliance (HIPAA). They are migrating from colocation to GCP. What measures are required to maintain compliance?",
    "caseStudy": "Company Overview: EHR Healthcare provides electronic health record (EHR) software as a service to multinational medical offices, hospitals, and insurance providers.\n\nExisting Environment: Multiple colocation facilities (one lease expiring). Customer-facing apps are web-based, many containerized on Kubernetes. Databases: MySQL, MS SQL Server, Redis, MongoDB. Legacy file- and API-based integrations with insurance providers on-premises (no plans to replace soon). Microsoft Active Directory for user management. Open source monitoring tools, alerts via email often ignored.\n\nBusiness Requirements: Onboard new insurance providers quickly, 99.9% availability for customer-facing systems, centralized visibility and proactive monitoring, healthcare trend insights, reduce latency, maintain regulatory compliance, decrease infrastructure admin costs, generate industry trend reports.\n\nTechnical Requirements: Maintain legacy interfaces to insurance providers (on-prem + cloud), consistent container management, secure high-performance on-prem to GCP connection, consistent logging/monitoring/alerting, manage multiple container environments, dynamically scale, ingest data from new providers.",
    "caseStudyName": "EHR Healthcare",
    "options": [
      "Enable default Google-managed encryption for all GCP services",
      "Implement CMEK (Customer-Managed Encryption Keys) with Cloud KMS for PHI data, VPC Service Controls to prevent data exfiltration, Cloud Audit Logs for all data access, and sign a BAA with Google Cloud",
      "Use Cloud Armor to protect all customer-facing endpoints handling PHI",
      "Implement IAM least privilege and store all PHI in a dedicated GCP project"
    ],
    "correctAnswer": 1,
    "explanation": "HIPAA compliance requires a Business Associate Agreement (BAA) with Google Cloud, CMEK for data encryption control, VPC Service Controls to prevent PHI exfiltration, and comprehensive audit logging of all PHI access. This satisfies the business requirement to 'maintain regulatory compliance.' Default encryption (A) doesn't provide customer control required for HIPAA. Cloud Armor (C) protects endpoints but doesn't address data compliance. Least privilege + project isolation (D) are necessary but not sufficient for HIPAA.",
    "domain": "Security & Compliance"
  }
];