import {
  ChannelTypeEnum,
  ISendMessageSuccessResponse,
  IChatOptions,
  IChatProvider,
} from '@novu/stateless';
import axios from 'axios';

export class RyverChatProvider implements IChatProvider {
  id = 'ryver';
  channelType = ChannelTypeEnum.CHAT as ChannelTypeEnum.CHAT;
  private axiosInstance = axios.create();

  async sendMessage(data: IChatOptions): Promise<ISendMessageSuccessResponse> {
    const response = await this.axiosInstance.post(data.webhookUrl, {
      text: data.content,
    });

    return {
      id: `${response.status}`,
      date: new Date().toISOString(),
    };
  }
}
