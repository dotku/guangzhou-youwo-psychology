import { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.XAI_API_KEY || "",
  baseURL: "https://api.x.ai/v1",
});

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { messages } = request.body;

    if (!messages || !Array.isArray(messages)) {
      return response.status(400).json({ error: "Messages array is required" });
    }

    const completion = await client.chat.completions.create({
      model: "grok-2-latest",
      messages: [
        {
          role: "system",
          content: `你是广州尤我心理咨询服务中心的专业心理咨询助手。请以专业、温和、同理心的方式回答问题。

          我们提供以下专业服务：
          - 个人心理咨询：情绪管理、压力疏导、人际关系等
          - 团体心理咨询：家庭治疗、企业团建、成长工作坊等
          - 心理健康评估：专业量表测评、个性化分析报告
          - 心理健康教育：讲座、工作坊、心理健康科普

          温馨提示：
          1. 本平台仅提供初步咨询和建议，不构成正式的心理诊断或治疗。
          2. 如遇紧急情况，请立即拨打紧急救助电话或就近就医。
          3. 所有咨询内容都将严格保密。

          预约咨询或了解更多详情，请联系我们：
          电话：020-XXXXXXXX（工作时间：周一至周五 9:00-18:00）
          地址：广州市
          `,
        },
        ...messages,
      ],
      temperature: 0.7,
      max_tokens: 800,
    });

    return response.status(200).json({
      message: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error:", error);
    return response.status(500).json({
      error: "An error occurred while processing your request",
    });
  }
}
