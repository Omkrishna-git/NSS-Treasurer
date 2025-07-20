import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  // Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

// // Replace with your deployed image path
// const NSS_LOGO = "https://yourdomain.com/nss-bg.png";

export default function EmailTemplate({
  userName = "",
  type = "monthly-report",
  data = {},
}) {
  const renderHeader = () => (
    <Section style={styles.logoWrapper}>
      {/*  */}
    </Section>
  );

  if (type === "monthly-report") {
    return (
      <Html>
        <Head />
        <Preview>Your Monthly Financial Report</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            {renderHeader()}
            <Heading style={styles.title}>Monthly Financial Report</Heading>

            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              Here&rsquo;s your financial summary for {data?.month}:
            </Text>

            {/* Main Stats */}
            <Section style={styles.statsContainer}>
              <div style={styles.stat}>
                <Text style={styles.text}>Total Income</Text>
                <Text style={styles.heading}>₹{data?.stats?.totalIncome}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Total Expenses</Text>
                <Text style={styles.heading}>₹{data?.stats?.totalExpenses}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Net</Text>
                <Text style={styles.heading}>
                  ₹{data?.stats?.totalIncome - data?.stats?.totalExpenses}
                </Text>
              </div>
            </Section>

            {/* Category Breakdown */}
            {data?.stats?.byCategory && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>Expenses by Category</Heading>
                {Object.entries(data.stats.byCategory).map(
                  ([category, amount]) => (
                    <div key={category} style={styles.row}>
                      <Text style={styles.text}>{category}</Text>
                      <Text style={styles.text}>₹{amount}</Text>
                    </div>
                  )
                )}
              </Section>
            )}

            {/* AI Insights */}
            {data?.insights && (
              <Section style={styles.section}>
                <Heading style={styles.heading}>Welth Insights</Heading>
                {data.insights.map((insight, index) => (
                  <Text key={index} style={styles.text}>
                    • {insight}
                  </Text>
                ))}
              </Section>
            )}

            <Text style={styles.footer}>
              Thank you for using Welth. Keep tracking your finances for better
              financial health!
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }

  // Budget Alert
  if (type === "budget-alert") {
    return (
      <Html>
        <Head />
        <Preview>Budget Alert</Preview>
        <Body style={styles.body}>
          <Container style={styles.container}>
            {renderHeader()}
            <Heading style={styles.title}>Budget Alert</Heading>
            <Text style={styles.text}>Hello {userName},</Text>
            <Text style={styles.text}>
              You&rsquo;ve used {data?.percentageUsed.toFixed(1)}% of your
              monthly budget.
            </Text>
            <Section style={styles.statsContainer}>
              <div style={styles.stat}>
                <Text style={styles.text}>Budget Amount</Text>
                <Text style={styles.heading}>₹{data?.budgetAmount}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Spent So Far</Text>
                <Text style={styles.heading}>₹{data?.totalExpenses}</Text>
              </div>
              <div style={styles.stat}>
                <Text style={styles.text}>Remaining</Text>
                <Text style={styles.heading}>
                  ₹{data?.budgetAmount - data?.totalExpenses}
                </Text>
              </div>
            </Section>
            <Text style={styles.footer}>
              Watch your spending and stay within budget! 🔍
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }
}

const styles = {
  body: {
    backgroundColor: "#f6f9fc",
    fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
  },
  container: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px",
    borderRadius: "6px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
    maxWidth: "600px",
  },
  logoWrapper: {
    textAlign: "center",
    marginBottom: "10px",
  },
  logo: {
    borderRadius: "50%",
  },
  title: {
    color: "#1f2937",
    fontSize: "28px",
    fontWeight: "700",
    textAlign: "center",
    margin: "0 0 16px",
  },
  heading: {
    color: "#111827",
    fontSize: "18px",
    fontWeight: "600",
    margin: "8px 0",
  },
  text: {
    color: "#374151",
    fontSize: "16px",
    margin: "8px 0",
  },
  section: {
    marginTop: "24px",
    padding: "16px",
    backgroundColor: "#f9fafb",
    borderRadius: "6px",
    border: "1px solid #e5e7eb",
  },
  statsContainer: {
    margin: "24px 0",
    padding: "16px",
    backgroundColor: "#f3f4f6",
    borderRadius: "6px",
  },
  stat: {
    marginBottom: "12px",
    padding: "10px",
    backgroundColor: "#ffffff",
    borderRadius: "4px",
    border: "1px solid #e5e7eb",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid #e5e7eb",
  },
  footer: {
    color: "#6b7280",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "32px",
    paddingTop: "12px",
    borderTop: "1px solid #e5e7eb",
  },
};
